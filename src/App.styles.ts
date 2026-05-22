import { css } from '@emotion/react';

export const styles = {
  pageHeader: css`
    margin-bottom: 2.25rem;
  `,

  contentGrid: css`
    display: grid;
    gap: 2.25rem;
    grid-template-columns: minmax(18rem, 23rem) minmax(0, 1fr);
    align-items: start;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  `,

  column: css`
    display: grid;
    gap: 1.5rem;
  `,

  stack: css`
    display: grid;
    gap: 1rem;
  `,

  paragraphList: css`
    display: grid;
    gap: 0.9rem;
  `,

  educationCard: css`
    display: grid;
    gap: 0.35rem;
  `,

  institution: css`
    margin: 0;
    font-family: var(--cv-font-heading);
    font-size: 1rem;
  `,

  degree: css`
    margin: 0;
    color: var(--colors-primary);
    font-family: var(--cv-font-heading);
    font-weight: 700;
  `,

  meta: css`
    margin: 0;
    color: var(--cv-muted);
    font-style: italic;
  `,

  languageList: css`
    display: grid;
    gap: 0.5rem;
    margin: 0;
    padding-left: 1rem;
  `,

  category: css`
    display: grid;
    gap: 1rem;
  `,

  categoryHeading: css`
    margin: 0;
    font-family: var(--cv-font-heading);
    color: var(--colors-primary);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  `,

  twoColList: css`
    columns: 2;
    column-gap: 1.5rem;
    margin: 0;
    padding-left: 1rem;

    @media (max-width: 768px) {
      columns: 1;
    }
  `,
};
