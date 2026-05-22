import { css } from '@emotion/react';

export const styles = {
  button: css`
    justify-self: start;
    padding: 0.75rem 1rem;
    border: 1px solid var(--colors-primary);
    border-radius: 999px;
    background-color: var(--cv-surface);
    color: var(--colors-primary);
    cursor: pointer;
    font-family: var(--cv-font-heading);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition:
      background-color 180ms ease,
      color 180ms ease,
      transform 180ms ease;

    &:hover {
      background-color: var(--colors-primary);
      color: var(--cv-surface);
      transform: translateY(-1px);
    }
  `,
};
