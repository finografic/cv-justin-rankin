import { css } from '@emotion/react';

export const styles = {
  wrapInline: css`
    margin: 0.35rem 0 0;
    font-family: var(--cv-font-body);
    font-size: 0.875rem;
    line-height: 1.64;
  `,

  wrapBlock: css`
    margin: 0.35rem 0 0;
    font-family: var(--cv-font-body);
    font-size: 0.875rem;
    line-height: 1.64;
    display: grid;
    gap: 0.45rem;
  `,

  labelDefault: css`
    font-weight: 700;
    color: var(--cv-text);
  `,

  labelCategory: css`
    display: block;
    margin: 0;
    font-family: var(--cv-font-heading);
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--cv-text);
  `,

  listText: css`
    color: var(--cv-text);
  `,

  pills: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
    padding: 0.4rem 0 0.5rem;
  `,

  pill: css`
    padding: 0.33rem 0.66rem;
    border: 1px solid var(--colors-primary-light);
    border-radius: 6px;
    background: transparent;
    color: var(--colors-primary);
    font-family: var(--cv-font-body);
    font-size: 0.875rem;
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
