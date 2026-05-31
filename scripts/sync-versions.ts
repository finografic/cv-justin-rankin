import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const GITHUB_ORG = 'finografic';
const API_BASE = 'https://api.github.com';

/** Skip version fetch — no GitHub releases/tags yet. */
const VERSION_BLOCKLIST = new Set(['touch-monorepo', 'LLAAB', 'monorepo-starter']);

const GITHUB_PROJECT_NAMES = new Set(['touch-monorepo', 'monorepo-starter', 'LLAAB']);

const DATA_FILES = [
  'src/data/projects.data.ts',
  'src/data/ai-projects.data.ts',
  'src/data/cli-projects.data.ts',
  'src/data/fullstack-projects.data.ts',
];

const HEADERS: Record<string, string> = {
  'Accept': 'application/vnd.github+json',
  'User-Agent': 'cv-justin-rankin-version-sync',
};

interface SyncResult {
  pkg: string;
  oldVersion: string | null;
  newVersion: string | null;
  oldCommits: number | null;
  newCommits: number | null;
  versionStatus: 'updated' | 'added' | 'unchanged' | 'skipped' | 'error' | 'pending';
  commitsStatus: 'updated' | 'added' | 'unchanged' | 'skipped' | 'error' | 'pending';
  error?: string;
}

function extractRepoName(pkg: string): string | null {
  const scoped = pkg.match(/^@finografic\/(.+)$/);
  if (scoped) return scoped[1];
  if (GITHUB_PROJECT_NAMES.has(pkg)) {
    return pkg === 'LLAAB' ? 'llaab' : pkg;
  }
  return null;
}

function normalizeTag(tag: string): string {
  return tag.replace(/^v/, '');
}

async function fetchLatestVersion(repo: string): Promise<string | null> {
  const releaseUrl = `${API_BASE}/repos/${GITHUB_ORG}/${repo}/releases/latest`;
  const releaseRes = await fetch(releaseUrl, { headers: HEADERS });

  if (releaseRes.ok) {
    const data = (await releaseRes.json()) as { tag_name: string };
    return normalizeTag(data.tag_name);
  }

  const tagsUrl = `${API_BASE}/repos/${GITHUB_ORG}/${repo}/tags?per_page=1`;
  const tagsRes = await fetch(tagsUrl, { headers: HEADERS });

  if (tagsRes.ok) {
    const tags = (await tagsRes.json()) as Array<{ name: string }>;
    if (tags.length > 0) {
      return normalizeTag(tags[0].name);
    }
  }

  return null;
}

async function fetchCommitCount(repo: string): Promise<number | null> {
  const url = `${API_BASE}/repos/${GITHUB_ORG}/${repo}/commits?per_page=1`;
  const res = await fetch(url, { headers: HEADERS });

  if (!res.ok) return null;

  const link = res.headers.get('Link');
  if (link) {
    const lastMatch = link.match(/[?&]page=(\d+)>;\s*rel="last"/);
    if (lastMatch) return Number.parseInt(lastMatch[1], 10);
  }

  const commits = (await res.json()) as unknown[];
  return commits.length;
}

function extractProjectNames(content: string): string[] {
  const nameRegex = /name:\s*'([^']+)'/g;
  const names: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = nameRegex.exec(content)) !== null) {
    const name = match[1];
    if (name.startsWith('@finografic/') || GITHUB_PROJECT_NAMES.has(name)) {
      names.push(name);
    }
  }
  return names;
}

function escapePkg(pkg: string): string {
  return pkg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractProjectBlock(content: string, pkg: string): string | null {
  const match = content.match(
    new RegExp(`\\{\\s*\\n\\s*name:\\s*'${escapePkg(pkg)}',([\\s\\S]*?)\\n\\s*\\},`),
  );
  return match?.[1] ?? null;
}

function readProjectField(
  content: string,
  pkg: string,
  field: 'version' | 'commits',
): string | number | null {
  const block = extractProjectBlock(content, pkg);
  if (!block) return null;

  if (field === 'version') {
    const match = block.match(/version:\s*'([^']*)'/);
    return match ? match[1] : null;
  }

  const match = block.match(/commits:\s*(\d+)/);
  return match ? Number.parseInt(match[1], 10) : null;
}

function updateVersion(
  content: string,
  pkg: string,
  newVersion: string,
): { content: string; action: 'updated' | 'added' | 'unchanged' } {
  const escapedPkg = escapePkg(pkg);
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

function updateCommits(
  content: string,
  pkg: string,
  newCommits: number,
): { content: string; action: 'updated' | 'added' | 'unchanged' } {
  const escapedPkg = escapePkg(pkg);

  const existingRegex = new RegExp(`(name:\\s*'${escapedPkg}',[\\s\\S]*?)commits:\\s*\\d+`);
  const existingMatch = content.match(existingRegex);

  if (existingMatch) {
    const currentMatch = existingMatch[0].match(/commits:\s*(\d+)/);
    const current = currentMatch ? Number.parseInt(currentMatch[1], 10) : null;
    if (current === newCommits) {
      return { content, action: 'unchanged' };
    }
    const updated = content.replace(existingRegex, `$1commits: ${newCommits}`);
    return { content: updated, action: 'updated' };
  }

  // Insert after version line if present, otherwise after name line
  const afterVersionRegex = new RegExp(`(name:\\s*'${escapedPkg}',\\s*\\n\\s*version:\\s*'[^']*',\\s*\\n)`);
  const afterVersionMatch = content.match(afterVersionRegex);
  if (afterVersionMatch) {
    const indent = afterVersionMatch[1].match(/^(\s*)version:/m)?.[1] ?? '        ';
    const updated = content.replace(afterVersionRegex, `$1${indent}commits: ${newCommits},\n`);
    return { content: updated, action: 'added' };
  }

  const afterNameRegex = new RegExp(`(name:\\s*'${escapedPkg}',\\s*\\n)`);
  const afterNameMatch = content.match(afterNameRegex);
  if (afterNameMatch) {
    const nameLineMatch = content.match(new RegExp(`^(\\s*)name:\\s*'${escapedPkg}'`, 'm'));
    const indent = nameLineMatch ? nameLineMatch[1] : '        ';
    const updated = content.replace(afterNameRegex, `$1${indent}commits: ${newCommits},\n`);
    return { content: updated, action: 'added' };
  }

  return { content, action: 'unchanged' };
}

async function main(): Promise<void> {
  const root = resolve(import.meta.dirname, '..');
  const results: SyncResult[] = [];

  const allProjects = new Map<
    string,
    { file: string; oldVersion: string | null; oldCommits: number | null }
  >();

  for (const relPath of DATA_FILES) {
    const filePath = resolve(root, relPath);
    const content = readFileSync(filePath, 'utf-8');
    const names = extractProjectNames(content);

    for (const name of names) {
      allProjects.set(name, {
        file: relPath,
        oldVersion: readProjectField(content, name, 'version') as string | null,
        oldCommits: readProjectField(content, name, 'commits') as number | null,
      });
    }
  }

  console.log(`\nSyncing ${allProjects.size} projects from GitHub...\n`);

  const versionMap = new Map<string, string>();
  const commitsMap = new Map<string, number>();

  for (const [pkg] of allProjects) {
    const repo = extractRepoName(pkg);
    if (!repo) {
      results.push({
        pkg,
        oldVersion: null,
        newVersion: null,
        oldCommits: null,
        newCommits: null,
        versionStatus: 'skipped',
        commitsStatus: 'skipped',
      });
      continue;
    }

    let versionError: string | undefined;
    let commitsError: string | undefined;

    if (!VERSION_BLOCKLIST.has(pkg)) {
      try {
        const version = await fetchLatestVersion(repo);
        if (version) {
          versionMap.set(pkg, version);
        } else {
          versionError = 'no releases or tags found';
        }
      } catch (err) {
        versionError = err instanceof Error ? err.message : String(err);
      }
    }

    try {
      const commits = await fetchCommitCount(repo);
      if (commits != null) {
        commitsMap.set(pkg, commits);
      } else {
        commitsError = 'could not fetch commit count';
      }
    } catch (err) {
      commitsError = err instanceof Error ? err.message : String(err);
    }

    const info = allProjects.get(pkg)!;
    results.push({
      pkg,
      oldVersion: info.oldVersion,
      newVersion: versionMap.get(pkg) ? `v${versionMap.get(pkg)}` : null,
      oldCommits: info.oldCommits,
      newCommits: commitsMap.get(pkg) ?? null,
      versionStatus: VERSION_BLOCKLIST.has(pkg)
        ? 'skipped'
        : versionMap.has(pkg)
          ? 'pending'
          : versionError
            ? 'error'
            : 'unchanged',
      commitsStatus: commitsMap.has(pkg) ? 'pending' : commitsError ? 'error' : 'unchanged',
      error: versionError ?? commitsError,
    });
  }

  for (const relPath of DATA_FILES) {
    const filePath = resolve(root, relPath);
    let content = readFileSync(filePath, 'utf-8');
    let fileChanged = false;

    for (const [pkg, version] of versionMap) {
      const projectInfo = allProjects.get(pkg);
      if (projectInfo?.file !== relPath) continue;

      const { content: updatedContent, action } = updateVersion(content, pkg, version);
      if (action !== 'unchanged') {
        content = updatedContent;
        fileChanged = true;
      }

      const result = results.find((r) => r.pkg === pkg);
      if (result && result.versionStatus === 'pending') {
        result.versionStatus = action;
        result.newVersion = `v${version}`;
      }
    }

    for (const [pkg, commits] of commitsMap) {
      const projectInfo = allProjects.get(pkg);
      if (projectInfo?.file !== relPath) continue;

      const { content: updatedContent, action } = updateCommits(content, pkg, commits);
      if (action !== 'unchanged') {
        content = updatedContent;
        fileChanged = true;
      }

      const result = results.find((r) => r.pkg === pkg);
      if (result && result.commitsStatus === 'pending') {
        result.commitsStatus = action;
        result.newCommits = commits;
      }
    }

    if (fileChanged) {
      writeFileSync(filePath, content, 'utf-8');
    }
  }

  const col1 = 32;
  const col2 = 12;
  const col3 = 12;
  const col4 = 10;
  const col5 = 10;

  console.log(
    'Package'.padEnd(col1),
    'Version'.padEnd(col2),
    'Commits'.padEnd(col3),
    'Ver'.padEnd(col4),
    'Commits'.padEnd(col5),
  );
  console.log('-'.repeat(col1 + col2 + col3 + col4 + col5 + 4));

  for (const r of results) {
    const versionCol =
      r.oldVersion && r.newVersion && r.oldVersion !== r.newVersion
        ? `${r.oldVersion} → ${r.newVersion}`
        : (r.newVersion ?? r.oldVersion ?? '-');
    const commitsCol =
      r.oldCommits != null && r.newCommits != null && r.oldCommits !== r.newCommits
        ? `${r.oldCommits.toLocaleString('en-US')} → ${r.newCommits.toLocaleString('en-US')}`
        : r.newCommits != null
          ? r.newCommits.toLocaleString('en-US')
          : r.oldCommits != null
            ? r.oldCommits.toLocaleString('en-US')
            : '-';

    console.log(
      r.pkg.padEnd(col1),
      versionCol.padEnd(col2),
      commitsCol.padEnd(col3),
      r.versionStatus.padEnd(col4),
      r.commitsStatus.padEnd(col5),
      r.error ? `(${r.error})` : '',
    );
  }

  const versionChanged = results.filter((r) => r.versionStatus === 'updated' || r.versionStatus === 'added');
  const commitsChanged = results.filter((r) => r.commitsStatus === 'updated' || r.commitsStatus === 'added');
  console.log(
    `\n${versionChanged.length} version(s) changed, ${commitsChanged.length} commit count(s) changed.\n`,
  );
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
