import { CVEntry } from 'layout/web/CVEntry';
import type { ReactNode } from 'react';
import type { EducationEntry as EducationEntryData } from 'types';

import type { CvView } from 'types/cv-view.types';

interface EducationEntryProps {
  view?: CvView;
  entry: EducationEntryData;
}

export function EducationEntry({ view = 'full', entry }: EducationEntryProps): ReactNode {
  if (view === 'condensed' && entry.detail) {
    return (
      <>
        <p className="cv-condensed-edu-institution">{entry.institution}</p>
        <p className="cv-condensed-edu-degree">{entry.detail}</p>
      </>
    );
  }

  return (
    <CVEntry
      view={view}
      meta={entry.location ?? entry.detail}
      subtitle={entry.degree}
      title={entry.institution}
    >
      {entry.description ? <p>{entry.description}</p> : null}
    </CVEntry>
  );
}
