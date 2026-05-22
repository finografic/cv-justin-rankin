import type { ReactNode } from 'react';

import { styles } from './CVSectionEntry.styles';

interface CVSectionEntryProps {
  heading: string;
  subheading?: string;
  meta?: string;
  children: ReactNode;
  technologies?: string[];
}

export function CVSectionEntry({
  heading,
  subheading,
  meta,
  children,
  technologies,
}: CVSectionEntryProps): ReactNode {
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
      {technologies?.length ? (
        <ul css={styles.techList}>
          {technologies.map((technology) => (
            <li css={styles.techItem} key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
