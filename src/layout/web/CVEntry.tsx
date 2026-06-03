import { ExternalLinkIcon } from '@finografic/icons';
import type { ReactNode } from 'react';

import { styles } from './CVEntry.styles';

export type CvEdition = 'screen' | 'print';

export interface CVEntryProps {
  /** Primary heading — company, institution, project name, etc. */
  title: string;
  /** Optional link on the title (work URLs, GitHub repos, …). */
  titleHref?: string;
  /** Second line — role, degree, … */
  subtitle?: string;
  /** Third line — dates, location, version · visibility · status, … */
  meta?: string;
  /** Print projects: meta beside the title on one line. */
  metaInline?: boolean;
  children?: ReactNode;
  className?: string;
  edition?: CvEdition;
}

export function CVEntry({
  title,
  titleHref,
  subtitle,
  meta,
  metaInline = false,
  children,
  className = 'print-avoid-break',
  edition = 'screen',
}: CVEntryProps): ReactNode {
  const isPrint = edition === 'print';
  const showTitleLinkIcon = !isPrint && Boolean(titleHref);

  const titleContent = titleHref ? (
    <a
      className={isPrint ? 'cv-entry__title-link' : undefined}
      css={isPrint ? undefined : styles.titleLink}
      href={titleHref}
      rel="noopener noreferrer"
      target="_blank"
    >
      {title}
      {showTitleLinkIcon ? <ExternalLinkIcon aria-hidden css={styles.externalIcon} /> : null}
    </a>
  ) : (
    title
  );

  const metaNode =
    meta && metaInline ? (
      <span className="cv-entry__meta cv-entry__meta--inline">{meta}</span>
    ) : meta ? (
      <p className="cv-entry__meta" css={isPrint ? undefined : styles.meta}>
        {meta}
      </p>
    ) : null;

  return (
    <article
      className={['cv-entry', isPrint ? 'cv-entry--print' : '', className].filter(Boolean).join(' ')}
      css={isPrint ? undefined : styles.wrap}
      data-cv-edition={edition}
    >
      <div className={metaInline ? 'cv-entry__title-row' : undefined}>
        <h3 className="cv-entry__title" css={isPrint ? undefined : styles.entryTitle}>
          {titleContent}
        </h3>
        {metaInline ? metaNode : null}
      </div>
      {subtitle ? (
        <p className="cv-entry__subtitle" css={isPrint ? undefined : styles.subtitle}>
          {subtitle}
        </p>
      ) : null}
      {!metaInline ? metaNode : null}
      {children ? (
        <div className="cv-entry__body" css={isPrint ? undefined : styles.body}>
          {children}
        </div>
      ) : null}
    </article>
  );
}
