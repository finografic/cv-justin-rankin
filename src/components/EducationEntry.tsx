import type { ReactNode } from 'react';
import type { EducationEntry as EducationEntryData } from 'types';

import { CVEntry } from '../layout/web/CVEntry';

interface EducationEntryProps {
  entry: EducationEntryData;
}

export function EducationEntry({ entry }: EducationEntryProps): ReactNode {
  return (
    <CVEntry meta={entry.location ?? entry.detail} subtitle={entry.degree} title={entry.institution}>
      {entry.description ? <p>{entry.description}</p> : null}
    </CVEntry>
  );
}
