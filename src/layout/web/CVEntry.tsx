import { ExternalLinkIcon } from '@finografic/icons';
import type { ReactNode } from 'react';

import type { CvView } from 'types/cv-view.types';

import { styles } from './CVEntry.styles';

export type { CvView };

export interface CVEntryProps {
  /** Primary heading — company, institution, project name, etc. */
  title: string;
  /** Optional link on the title (work URLs, GitHub repos, …). */
  titleHref?: string;
  /** Second line — role, degree, … */
  subtitle?: string;
  /** Third line — dates, location, version · visibility · status, … */
  meta?: string;
  /** Condensed view projects: meta beside the title on one line. */
  metaInline?: boolean;
  children?: ReactNode;
  className?: string;
  view?: CvView;
}

export function CVEntry({
  title,
  titleHref,
  subtitle,
  meta,
  metaInline = false,
  children,
  className = 'print-avoid-break',
  view = 'full',
}: CVEntryProps): ReactNode {
  const isCondensed = view === 'condensed';
  const showTitleLinkIcon = !isCondensed && Boolean(titleHref);

  const titleContent = titleHref ? (
    <a
      className={isCondensed ? 'cv-entry__title-link' : undefined}
      css={isCondensed ? undefined : styles.titleLink}
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
      <p className="cv-entry__meta" css={isCondensed ? undefined : styles.meta}>
        {meta}
      </p>
    ) : null;

  return (
    <article
      className={['cv-entry', isCondensed ? 'cv-entry--condensed' : '', className].filter(Boolean).join(' ')}
      css={isCondensed ? undefined : styles.wrap}
      data-cv-view={view}
    >
      <div className={metaInline ? 'cv-entry__title-row' : undefined}>
        <h3 className="cv-entry__title" css={isCondensed ? undefined : styles.entryTitle}>
          {titleContent}
        </h3>
        {metaInline ? metaNode : null}
      </div>
      {subtitle ? (
        <p className="cv-entry__subtitle" css={isCondensed ? undefined : styles.subtitle}>
          {subtitle}
        </p>
      ) : null}
      {!metaInline ? metaNode : null}
      {children ? (
        <div className="cv-entry__body" css={isCondensed ? undefined : styles.body}>
          {children}
        </div>
      ) : null}
    </article>
  );
}
