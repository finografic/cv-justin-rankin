import { css } from '@emotion/react';

export const styles = {
  wrap: css`
    display: grid;
    gap: 0.55rem;
  `,

  heading: css`
    margin: 0;
    font-family: var(--cv-font-heading);
    font-size: 1.05rem;
    line-height: 1.15;
  `,

  subheading: css`
    margin: 0;
    color: var(--colors-primary);
    font-family: var(--cv-font-heading);
    font-weight: 700;
    font-size: 0.92rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  `,

  meta: css`
    margin: 0;
    color: var(--cv-muted);
    font-style: italic;
    font-size: 0.98rem;
  `,

  techList: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    list-style: none;
    margin: 0;
    padding: 0;
  `,

  techItem: css`
    padding: 0.2rem 0.5rem;
    border: 1px solid var(--colors-primary-xxlight);
    border-radius: 999px;
    background-color: var(--colors-primary-xxxlight);
    color: var(--cv-muted);
    font-family: var(--cv-font-heading);
    font-size: 0.78rem;
    font-weight: 600;

    @media print {
      background-color: transparent;
      color: #000000;
      border-color: #c6c6c6;
    }
  `,
};
