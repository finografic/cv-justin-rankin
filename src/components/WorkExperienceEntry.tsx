import { ExternalLinkIcon } from '@finografic/icons';
import type { WorkEntry, WorkTechnologies } from '../data/types';
import type { ReactNode } from 'react';

import { styles } from './WorkExperienceEntry.styles';

interface WorkExperienceEntryProps {
  entry: WorkEntry;
}

function WorkTechnologiesBlock({ technologies }: { technologies: WorkTechnologies }): ReactNode {
  const variant = technologies.variant ?? 'list';

  if (variant === 'pills') {
    return (
      <div className="work-entry-technologies" css={styles.techBlock}>
        <strong css={styles.techLabel}>Technologies:</strong>
        <ul css={styles.techPills}>
          {technologies.items.map((technology) => (
            <li css={styles.techPill} key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <p className="work-entry-technologies" css={styles.techBlock}>
      <strong css={styles.techLabel}>Technologies:</strong>{' '}
      <span css={styles.techList}>{technologies.items.join(', ')}</span>
    </p>
  );
}

export function WorkExperienceEntry({ entry }: WorkExperienceEntryProps): ReactNode {
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
      {entry.technologies.items.length > 0 ? (
        <WorkTechnologiesBlock technologies={entry.technologies} />
      ) : null}
    </article>
  );
}
