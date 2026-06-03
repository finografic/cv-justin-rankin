import type { ReactNode } from 'react';

interface PrintSectionProps {
  children: ReactNode;
  sectionKey: string;
  title: string;
}

export function PrintSection({ children, sectionKey, title }: PrintSectionProps): ReactNode {
  return (
    <section className={`cv-condensed-section cv-condensed-section-${sectionKey}`}>
      <h2 className="cv-condensed-section-heading">{title}</h2>
      {children}
    </section>
  );
}
