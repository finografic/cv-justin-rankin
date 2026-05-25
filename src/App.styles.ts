import { css } from '@emotion/react';

export const styles = {
  pageHeader: css`
    margin-bottom: 2.5rem;
  `,

  contentGrid: css`
    display: grid;
    gap: 2.25rem;
    grid-template-columns: minmax(18rem, 27rem) minmax(0, 1fr);
    align-items: start;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  `,

  column: css`
    display: grid;
    gap: 1.5rem;

    section.cv-section-education {
      h3 {
        letter-spacing: 0;
      }
    }

    section.cv-section-languages {
      strong,
      span {
        display: inline-block;
      }
      strong {
        width: 3.5rem;
      }
      span.colon {
        color: var(--colors-secondary-xlight);
        font-weight: 700;
        margin-right: 0.5rem;
      }
    }

    section.cv-section-technical-projects {
      & > div {
        gap: 0;
      }
      h3:not(:first-of-type) {
        margin-top: 2rem;
      }
      article h3 {
        margin-top: 0.5rem;
      }
    }

    section.cv-section-languages {
      margin-top: 0.5rem;
    }
  `,

  stack: css`
    display: grid;
    gap: 1rem;
  `,

  paragraphList: css`
    display: grid;
    gap: 0.9rem;
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
    display: block;
    margin: 0.15rem 0 0;
    padding: 0;
    font-family: var(--cv-font-body);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--colors-secondary-light);
    letter-spacing: 0.01em;
    & + ul {
      padding: 0 0 0.25rem;
    }
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
