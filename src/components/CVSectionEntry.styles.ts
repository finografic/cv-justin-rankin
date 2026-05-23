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
};
