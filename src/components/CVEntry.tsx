import { ExternalLinkIcon } from '@finografic/icons';
import type { ReactNode } from 'react';

import { styles } from './CVEntry.styles';

export interface CVEntryProps {
  /** Primary heading — company, institution, project name, etc. */
  title: string;
  /** Optional link on the title (work URLs, GitHub repos, …). */
  titleHref?: string;
  /** Second line — role, degree, … */
  subtitle?: string;
  /** Third line — dates, location, version · visibility · status, … */
  meta?: string;
  children?: ReactNode;
  className?: string;
}

export function CVEntry({
  title,
  titleHref,
  subtitle,
  meta,
  children,
  className = 'print-avoid-break',
}: CVEntryProps): ReactNode {
  const titleContent = titleHref ? (
    <a css={styles.titleLink} href={titleHref} rel="noopener noreferrer" target="_blank">
      {title}
      <ExternalLinkIcon aria-hidden css={styles.externalIcon} />
    </a>
  ) : (
    title
  );

  return (
    <article className={className} css={styles.wrap}>
      <h3 css={styles.entryTitle}>{titleContent}</h3>
      {subtitle ? <p css={styles.subtitle}>{subtitle}</p> : null}
      {meta ? <p css={styles.meta}>{meta}</p> : null}
      {children ? <div css={styles.body}>{children}</div> : null}
    </article>
  );
}
