import type { ReactNode } from 'react';

import { styles } from './CVSection.styles';

interface CVSectionProps {
  title: string;
  /** Stable slug for section class/id — renders `cv-section cv-section-${sectionKey}`. */
  sectionKey: string;
  variant?: 'default' | 'compact' | 'grid';
  children: ReactNode;
  className?: string;
  /** Defaults to `sectionKey` when omitted. */
  id?: string;
}

export function CVSection({
  title,
  sectionKey,
  variant = 'default',
  children,
  className,
  id,
}: CVSectionProps): ReactNode {
  const sectionClass = [
    'cv-section',
    `cv-section-${sectionKey}`,
    variant === 'compact' && 'compact',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionClass} css={styles.section} id={id ?? sectionKey}>
      <h2 css={styles.heading}>{title}</h2>
      {children}
    </section>
  );
}
