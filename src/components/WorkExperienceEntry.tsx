import styled from '@emotion/styled';
import type { WorkEntry } from '../data/types';
import type { ReactNode } from 'react';

import { CVSectionEntry } from './CVSectionEntry';

const Copy = styled.div({
  display: 'grid',
  gap: '0.6rem',
});

const Paragraph = styled.p({
  margin: 0,
});

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
      <Copy>
        {entry.description.map((paragraph) => (
          <Paragraph key={paragraph}>{paragraph}</Paragraph>
        ))}
      </Copy>
    </CVSectionEntry>
  );
}
