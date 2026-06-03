import type { Project } from 'types';

const FINOGRAFIC_PACKAGE = /^@finografic\/(.+)$/;

export function formatCommitCount(commits: number): string {
  return `${commits.toLocaleString('en-US')} commits`;
}

export function formatProjectMeta(project: Project): string | undefined {
  const parts = [
    project.version,
    project.commits != null ? formatCommitCount(project.commits) : undefined,
  ].filter(Boolean);
  if (parts.length) return parts.join(' · ');
  if (project.status) return project.status;
  return undefined;
}

export function resolveProjectTitleHref(project: Project): string | undefined {
  if (project.titleHref) return project.titleHref;
  const match = FINOGRAFIC_PACKAGE.exec(project.name);
  if (match) return `https://github.com/finografic/${match[1]}`;
  return undefined;
}
