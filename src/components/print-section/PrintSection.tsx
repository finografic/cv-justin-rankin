import type { ReactNode } from 'react';

interface PrintSectionProps {
  children: ReactNode;
  sectionKey: string;
  title: string;
}

export function PrintSection({ children, sectionKey, title }: PrintSectionProps): ReactNode {
  return (
    <section className={`pe-section pe-section-${sectionKey}`}>
      <h2 className="pe-section-heading">{title}</h2>
      {children}
    </section>
  );
}
