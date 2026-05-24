import { css } from '@emotion/react';

export const styles = {
  section: css`
    display: grid;
    gap: 1rem;
    font-size: 0.9rem;
    line-height: 1.66;

    &.compact {
      gap: 0.9rem;
    }

    ul {
      padding-left: 0;
    }
  `,

  heading: css`
    margin: 0;
    padding-bottom: 0.25rem;
    background-position: 0 100%;
    background-image: linear-gradient(
      90deg,
      color-mix(in oklch, var(--colors-primary) 50%, transparent) 30%,
      transparent 0
    );
    background-size: 6px 2px;
    background-repeat: repeat-x;
    color: var(--colors-primary);
    font-family: var(--cv-font-heading);
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: uppercase;

    @media print {
      border-bottom: 1px dotted var(--colors-primary-lighter);
      background: none;
    }
  `,
};
