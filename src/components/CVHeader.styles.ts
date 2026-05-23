import { css } from '@emotion/react';

export const styles = {
  wrap: css`
    display: grid;
    gap: 0.95rem;
    grid-template-columns: 6.25rem minmax(0, 1fr);
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  `,

  name: css`
    margin: 0;
    font-family: var(--cv-font-heading);
    font-weight: 600;
    font-size: clamp(1rem, 1.6vw, 1.625rem);
    line-height: 1.2;
    letter-spacing: 0;
    text-transform: uppercase;
    color: var(--colors-secondary-lighter);
  `,

  positioning: css`
    margin: 0.125rem 0 0;
    color: var(--colors-primary);
    font-family: var(--cv-font-heading);
    font-size: clamp(0.875rem, 1.4vw, 1.375rem);
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1.25;
    text-transform: uppercase;
  `,

  strap: css`
    margin: 0.45rem 0 0;
    max-width: 52rem;
    color: var(--cv-muted);
    font-size: 1rem;
    line-height: 1.5;
  `,
};
