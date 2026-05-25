import { css } from '@emotion/react';

export const styles = {
  wrapInline: css`
    margin: 0.35rem 0 0;
    font-family: var(--cv-font-body);
    font-size: 0.875rem;
    line-height: 1.64;
  `,

  wrapBlock: css`
    margin: 0.1rem 0 0;
    font-family: var(--cv-font-body);
    font-size: 0.875rem;
    line-height: 1.64;
    display: grid;
    gap: 0.45rem;
    & + p {
      margin-top: 0.25rem;
    }
  `,

  labelCategory: css`
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

  listText: css`
    color: var(--cv-text);
  `,

  pills: css`
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.4rem;
    column-gap: 0.4rem;
    list-style: none;
    margin: 0;
    padding: 0;
    padding: 0.4rem 0 0.5rem;
  `,

  pillsNoWrap: css`
    flex-wrap: nowrap;

    li {
      flex-shrink: 0;
      white-space: nowrap;
    }
  `,

  pill: css`
    padding: 0.4rem 0.66rem;
    border: 1px solid var(--colors-primary-light);
    border-radius: 6px;
    background: transparent;
    color: var(--colors-primary);
    font-family: var(--cv-font-body);
    font-size: 0.82rem;
    letter-spacing: 0.015em;
    font-weight: 600;
    line-height: 1.2;

    @media print {
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }
  `,

  bullets: css`
    margin: 0;
    color: var(--cv-text);
  `,

  bulletSep: css`
    color: var(--colors-primary);
    font-weight: 600;
  `,
};
