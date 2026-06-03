import { PrintColumnBreak } from 'components/print-column-break/PrintColumnBreak';
import { CVEntry } from 'layout/web/CVEntry';
import { Fragment } from 'react';
import type { CvEdition } from 'layout/web/CVEntry';
import type { ReactNode } from 'react';
import type { Project } from 'types';

import { formatProjectMeta, resolveProjectTitleHref } from 'utils/project-meta.utils';

interface ProjectEntryProps {
  edition?: CvEdition;
  project: Project;
}

export function ProjectEntry({ edition = 'screen', project }: ProjectEntryProps): ReactNode {
  const meta = formatProjectMeta(project);

  return (
    <Fragment>
      <CVEntry
        edition={edition}
        meta={meta}
        metaInline={edition === 'print'}
        title={project.name}
        titleHref={resolveProjectTitleHref(project)}
      >
        <p>{project.description}</p>
      </CVEntry>
      {project.printBreakAfter ? <PrintColumnBreak when="after" /> : null}
    </Fragment>
  );
}
