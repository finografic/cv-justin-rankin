import { css } from '@emotion/react';

/** Shared colon-separated list (philosophy, languages). Print density in `print.styles.ts`. */
export const styles = {
  list: css`
    list-style: none;
    margin: 0;
    padding: 0;
  `,

  item: css`
    margin: 0;
  `,

  label: css`
    display: inline;
    font-weight: 700;
    color: #1a1a1a;
  `,

  colon: css`
    display: inline;
    color: #b8b0a8;
    font-weight: 700;
  `,

  value: css`
    display: inline;
    color: #666;
  `,

  philosophyList: css`
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    .cv-colon-list__colon {
      margin-right: 0.35rem;
    }
  `,

  philosophyValue: css`
    color: #666;
  `,

  languageList: css`
    display: grid;
    gap: 0.5rem;
    padding-left: 1rem;

    .cv-colon-list__label {
      display: inline-block;
      width: 3.5rem;
    }

    .cv-colon-list__colon {
      margin-right: 0.5rem;
      color: var(--colors-secondary-xlight);
    }

    .cv-colon-list__value {
      color: #1a1a1a;
      font-weight: 400;
    }
  `,
};
