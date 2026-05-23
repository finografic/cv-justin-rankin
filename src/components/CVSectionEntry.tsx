import type { ReactNode } from 'react';

import { styles } from './CVSectionEntry.styles';

interface CVSectionEntryProps {
  heading: string;
  subheading?: string;
  meta?: string;
  children: ReactNode;
}

export function CVSectionEntry({ heading, subheading, meta, children }: CVSectionEntryProps): ReactNode {
  return (
    <article className="print-avoid-break" css={styles.wrap}>
      {subheading ? (
        <p className="cv-accent" css={styles.subheading}>
          {subheading}
        </p>
      ) : null}
      <h3 css={styles.heading}>{heading}</h3>
      {meta ? <p css={styles.meta}>{meta}</p> : null}
      <div>{children}</div>
    </article>
  );
}
