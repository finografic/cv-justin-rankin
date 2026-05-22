import type { WorkEntry } from '../data/types';
import type { ReactNode } from 'react';

import { CVSectionEntry } from './CVSectionEntry';
import { styles } from './WorkExperienceEntry.styles';

interface WorkExperienceEntryProps {
  entry: WorkEntry;
}

export function WorkExperienceEntry({ entry }: WorkExperienceEntryProps): ReactNode {
  return (
    <CVSectionEntry
      heading={entry.company}
      meta={`${entry.period} · ${entry.location}`}
      subheading={entry.title}
      technologies={entry.technologies}
    >
      <div css={styles.copy}>
        {entry.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </CVSectionEntry>
  );
}
