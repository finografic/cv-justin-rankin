import { ExternalLinkIcon } from '@finografic/icons';
import type { WorkEntry } from '../data/types';
import type { ReactNode } from 'react';

import { ItemList } from './ItemList';
import { styles } from './WorkExperienceEntry.styles';

interface WorkExperienceEntryProps {
  entry: WorkEntry;
}

export function WorkExperienceEntry({ entry }: WorkExperienceEntryProps): ReactNode {
  const technologiesVariant = entry.technologies.variant ?? 'list';
  const companyHeading = entry.url ? (
    <a css={styles.companyLink} href={entry.url} rel="noopener noreferrer" target="_blank">
      {entry.company}
      <ExternalLinkIcon aria-hidden css={styles.externalIcon} />
    </a>
  ) : (
    entry.company
  );

  return (
    <article className="print-avoid-break" css={styles.wrap}>
      <h3 css={styles.companyHeading}>{companyHeading}</h3>
      <p css={styles.title}>{entry.title}</p>
      <p css={styles.meta}>
        {entry.period} · {entry.location}
      </p>
      <div css={styles.copy}>
        {entry.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ItemList
        className="work-entry-technologies"
        items={entry.technologies.items}
        label={technologiesVariant === 'list' ? 'Technologies' : undefined}
        variant={technologiesVariant}
      />
    </article>
  );
}
