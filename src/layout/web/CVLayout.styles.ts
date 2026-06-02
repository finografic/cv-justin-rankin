import { css } from '@emotion/react';

export const styles = {
  shell: css`
    min-height: 100vh;
    padding: 3rem 1.5rem 4rem;
    background-color: var(--cv-bg);

    @media (max-width: 768px) {
      padding: 1.25rem 0.875rem 2rem;
    }
  `,

  paper: css`
    max-width: 1180px;
    margin: 0 auto;
    padding: 2.5rem;
    background-color: var(--cv-surface);
    box-shadow: var(--cv-shadow);
    border-radius: var(--cv-radius-lg);

    @media (max-width: 768px) {
      padding: 1.25rem;
      border-radius: var(--cv-radius-md);
    }

    @media print {
      box-shadow: none;
      border-radius: 0;
      max-width: none;
      padding: 0;
    }
  `,
};
