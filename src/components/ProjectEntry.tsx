import { PrintColumnBreak } from 'components/print-column-break/PrintColumnBreak';
import { CVEntry } from 'layout/web/CVEntry';
import { Fragment } from 'react';
import type { ReactNode } from 'react';
import type { Project } from 'types';

import { formatProjectMeta, resolveProjectTitleHref } from 'utils/project-meta.utils';

import type { CvView } from 'types/cv-view.types';

interface ProjectEntryProps {
  view?: CvView;
  project: Project;
}

export function ProjectEntry({ view = 'full', project }: ProjectEntryProps): ReactNode {
  const meta = formatProjectMeta(project);

  return (
    <Fragment>
      <CVEntry
        view={view}
        meta={meta}
        metaInline={view === 'condensed'}
        title={project.name}
        titleHref={resolveProjectTitleHref(project)}
      >
        <p>{project.description}</p>
      </CVEntry>
      {project.printBreakAfter ? <PrintColumnBreak when="after" /> : null}
    </Fragment>
  );
}
