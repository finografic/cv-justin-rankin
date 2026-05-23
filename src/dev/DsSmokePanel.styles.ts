import { css } from '@emotion/react';

export const styles = {
  panel: css`
    margin-top: 0;
    margin-bottom: 2rem;
    padding: 1.25rem;
    border: 2px dashed var(--colors-primary);
    border-radius: var(--radii-md, 0.5rem);
    background: var(--colors-primary-xxxlight);
  `,

  title: css`
    margin: 0 0 0.35rem;
    font-family: var(--cv-font-heading);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--colors-primary);
  `,

  hint: css`
    margin: 0 0 1rem;
    font-size: 0.8rem;
    color: var(--cv-muted);
  `,

  row: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
  `,

  stack: css`
    display: grid;
    gap: 0.75rem;
  `,
};
