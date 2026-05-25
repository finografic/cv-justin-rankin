import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const GITHUB_ORG = 'finografic';
const API_BASE = 'https://api.github.com';

const BLOCKLIST = new Set(['touch-monorepo', 'LLAAB']);

const DATA_FILES = [
  'src/data/projects.data.ts',
  'src/data/ai-projects.data.ts',
  'src/data/cli-projects.data.ts',
  'src/data/fullstack-projects.data.ts',
];

interface VersionResult {
  pkg: string;
  oldVersion: string | null;
  newVersion: string | null;
  status: 'updated' | 'added' | 'unchanged' | 'skipped' | 'error';
  error?: string;
}

function extractRepoName(pkg: string): string | null {
  const match = pkg.match(/^@finografic\/(.+)$/);
  return match ? match[1] : null;
}

function normalizeTag(tag: string): string {
  return tag.replace(/^v/, '');
}

async function fetchLatestVersion(repo: string): Promise<string | null> {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'cv-justin-rankin-version-sync',
  };

  const releaseUrl = `${API_BASE}/repos/${GITHUB_ORG}/${repo}/releases/latest`;
  const releaseRes = await fetch(releaseUrl, { headers });

  if (releaseRes.ok) {
    const data = (await releaseRes.json()) as { tag_name: string };
    return normalizeTag(data.tag_name);
  }

  const tagsUrl = `${API_BASE}/repos/${GITHUB_ORG}/${repo}/tags?per_page=1`;
  const tagsRes = await fetch(tagsUrl, { headers });

  if (tagsRes.ok) {
    const tags = (await tagsRes.json()) as Array<{ name: string }>;
    if (tags.length > 0) {
      return normalizeTag(tags[0].name);
    }
  }

  return null;
}

function extractProjectNames(content: string): string[] {
  const nameRegex = /name:\s*'([^']+)'/g;
  const names: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = nameRegex.exec(content)) !== null) {
    const name = match[1];
    if (name.startsWith('@finografic/') || BLOCKLIST.has(name)) {
      names.push(name);
    }
  }
  return names;
}

function updateVersion(
  content: string,
  pkg: string,
  newVersion: string,
): { content: string; action: 'updated' | 'added' | 'unchanged' } {
  const escapedPkg = pkg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const versionValue = `v${newVersion}`;

  const existingRegex = new RegExp(`(name:\\s*'${escapedPkg}',\\s*\\n\\s*)version:\\s*'[^']*'`);
  const existingMatch = content.match(existingRegex);

  if (existingMatch) {
    const currentVersion = existingMatch[0].match(/version:\s*'([^']*)'/)?.[1];
    if (currentVersion === versionValue) {
      return { content, action: 'unchanged' };
    }
    const updated = content.replace(existingRegex, `$1version: '${versionValue}'`);
    return { content: updated, action: 'updated' };
  }

  const insertRegex = new RegExp(`(name:\\s*'${escapedPkg}',\\s*\\n)`);
  const insertMatch = content.match(insertRegex);

  if (insertMatch) {
    const nameLineMatch = content.match(new RegExp(`^(\\s*)name:\\s*'${escapedPkg}'`, 'm'));
    const indent = nameLineMatch ? nameLineMatch[1] : '        ';
    const updated = content.replace(insertRegex, `$1${indent}version: '${versionValue}',\n`);
    return { content: updated, action: 'added' };
  }

  return { content, action: 'unchanged' };
}

async function main(): Promise<void> {
  const root = resolve(import.meta.dirname, '..');
  const results: VersionResult[] = [];

  const allProjects = new Map<string, { file: string; oldVersion: string | null }>();

  for (const relPath of DATA_FILES) {
    const filePath = resolve(root, relPath);
    const content = readFileSync(filePath, 'utf-8');
    const names = extractProjectNames(content);

    for (const name of names) {
      const versionMatch = content.match(
        new RegExp(
          `name:\\s*'${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',\\s*\\n\\s*version:\\s*'([^']*)'`,
        ),
      );
      allProjects.set(name, {
        file: relPath,
        oldVersion: versionMatch ? versionMatch[1] : null,
      });
    }
  }

  console.log(`\nFetching versions for ${allProjects.size} projects...\n`);

  const versionMap = new Map<string, string>();

  for (const [pkg] of allProjects) {
    if (BLOCKLIST.has(pkg)) {
      results.push({ pkg, oldVersion: null, newVersion: null, status: 'skipped' });
      continue;
    }

    const repo = extractRepoName(pkg);
    if (!repo) {
      results.push({ pkg, oldVersion: null, newVersion: null, status: 'skipped' });
      continue;
    }

    try {
      const version = await fetchLatestVersion(repo);
      if (version) {
        versionMap.set(pkg, version);
      } else {
        results.push({
          pkg,
          oldVersion: allProjects.get(pkg)?.oldVersion ?? null,
          newVersion: null,
          status: 'error',
          error: 'no releases or tags found',
        });
      }
    } catch (err) {
      results.push({
        pkg,
        oldVersion: allProjects.get(pkg)?.oldVersion ?? null,
        newVersion: null,
        status: 'error',
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  for (const relPath of DATA_FILES) {
    const filePath = resolve(root, relPath);
    let content = readFileSync(filePath, 'utf-8');
    let fileChanged = false;

    for (const [pkg, version] of versionMap) {
      const projectInfo = allProjects.get(pkg);
      if (projectInfo?.file !== relPath) continue;

      const { content: updatedContent, action } = updateVersion(content, pkg, version);
      const newVersionStr = `v${version}`;

      if (action !== 'unchanged') {
        content = updatedContent;
        fileChanged = true;
      }

      results.push({
        pkg,
        oldVersion: projectInfo.oldVersion,
        newVersion: newVersionStr,
        status: action,
      });
    }

    if (fileChanged) {
      writeFileSync(filePath, content, 'utf-8');
    }
  }

  const col1 = 36;
  const col2 = 14;
  const col3 = 14;
  const col4 = 10;

  console.log('Package'.padEnd(col1), 'Old'.padEnd(col2), 'New'.padEnd(col3), 'Status'.padEnd(col4));
  console.log('-'.repeat(col1 + col2 + col3 + col4 + 3));

  for (const r of results) {
    console.log(
      r.pkg.padEnd(col1),
      (r.oldVersion ?? '-').padEnd(col2),
      (r.newVersion ?? '-').padEnd(col3),
      r.status.padEnd(col4),
      r.error ? `(${r.error})` : '',
    );
  }

  const updated = results.filter((r) => r.status === 'updated' || r.status === 'added');
  console.log(`\n${updated.length} version(s) changed.\n`);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
