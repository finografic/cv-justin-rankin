import { css } from '@emotion/react';

export const styles = {
  list: css`
    display: grid;
    gap: 0.7rem;
    list-style: none;
    margin: 0;
    padding: 0;
  `,

  item: css`
    display: grid;
    gap: 0.15rem;
  `,

  label: css`
    color: var(--cv-muted);
    font-family: var(--cv-font-heading);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  `,

  value: css`
    font-size: 1rem;
  `,
};
