import type { ReactNode } from 'react';

import { styles } from './CVSection.styles';

interface CVSectionProps {
  title: string;
  variant?: 'default' | 'compact' | 'grid';
  children: ReactNode;
  className?: string;
  id?: string;
}

export function CVSection({
  title,
  variant = 'default',
  children,
  className,
  id,
}: CVSectionProps): ReactNode {
  const sectionClass = ['cv-section', variant === 'compact' && 'compact', className]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionClass} css={styles.section} id={id}>
      <h2 css={styles.heading}>{title}</h2>
      {children}
    </section>
  );
}
