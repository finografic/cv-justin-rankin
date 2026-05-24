import { PrintColumnBreak } from 'components/print-column-break/PrintColumnBreak';
import { Fragment } from 'react';
import type { ReactNode } from 'react';
import type { Project } from 'types';

import { CVEntry } from '../layout/CVEntry';

const FINOGRAFIC_PACKAGE = /^@finografic\/(.+)$/;

function buildProjectMeta(project: Project): string | undefined {
  const parts = [project.version, project.visibility, project.status].filter(Boolean);
  return parts.length ? parts.join(' · ') : undefined;
}

function resolveProjectTitleHref(project: Project): string | undefined {
  if (project.titleHref) {
    return project.titleHref;
  }

  if (project.visibility !== 'public') {
    return undefined;
  }

  const match = FINOGRAFIC_PACKAGE.exec(project.name);
  if (match) {
    return `https://github.com/finografic/${match[1]}`;
  }

  return undefined;
}

interface ProjectEntryProps {
  project: Project;
}

export function ProjectEntry({ project }: ProjectEntryProps): ReactNode {
  return (
    <Fragment>
      <CVEntry
        meta={buildProjectMeta(project)}
        title={project.name}
        titleHref={resolveProjectTitleHref(project)}
      >
        <p>{project.description}</p>
      </CVEntry>
      {project.printBreakAfter ? <PrintColumnBreak when="after" /> : null}
    </Fragment>
  );
}
