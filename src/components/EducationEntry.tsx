import type { ReactNode } from 'react';
import type { EducationEntry as EducationEntryData } from 'types';

import { CVEntry } from '../layout/web/CVEntry';

interface EducationEntryProps {
  entry: EducationEntryData;
}

export function EducationEntry({ entry }: EducationEntryProps): ReactNode {
  return (
    <CVEntry meta={entry.location} subtitle={entry.degree} title={entry.institution}>
      <p>{entry.description}</p>
    </CVEntry>
  );
}
