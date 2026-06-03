import { CVEntry } from 'layout/web/CVEntry';
import type { CvEdition } from 'layout/web/CVEntry';
import type { ReactNode } from 'react';
import type { EducationEntry as EducationEntryData } from 'types';

interface EducationEntryProps {
  edition?: CvEdition;
  entry: EducationEntryData;
}

export function EducationEntry({ edition = 'screen', entry }: EducationEntryProps): ReactNode {
  if (edition === 'print' && entry.detail) {
    return (
      <>
        <p className="pe-edu-institution">{entry.institution}</p>
        <p className="pe-edu-degree">{entry.detail}</p>
      </>
    );
  }

  return (
    <CVEntry
      edition={edition}
      meta={entry.location ?? entry.detail}
      subtitle={entry.degree}
      title={entry.institution}
    >
      {entry.description ? <p>{entry.description}</p> : null}
    </CVEntry>
  );
}
