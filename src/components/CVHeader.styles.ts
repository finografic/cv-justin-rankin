import { css } from '@emotion/react';

export const styles = {
  wrap: css`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 5.5rem minmax(0, 1fr);
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
    font-size: clamp(2rem, 3vw, 3.3rem);
    line-height: 0.95;
    letter-spacing: -0.05em;
    color: var(--colors-secondary-lighter);
  `,

  positioning: css`
    margin: 0.45rem 0 0;
    color: var(--colors-primary);
    font-family: var(--cv-font-heading);
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  `,

  strap: css`
    margin: 0.7rem 0 0;
    max-width: 52rem;
    color: var(--cv-muted);
    font-size: 1rem;
  `,
};
