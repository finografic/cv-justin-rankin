import { css } from '@emotion/react';

export const styles = {
  wrap: css`
    display: grid;
    gap: 0.55rem;
  `,

  companyHeading: css`
    margin: 0.5rem 0 0;
    padding: 0;
    font-family: var(--cv-font-body);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.66;
  `,

  companyLink: css`
    display: inline;
    color: var(--colors-primary);
    text-decoration: none;

    &:hover {
      color: var(--colors-primary-dark, var(--colors-primary));
    }

    &:hover svg {
      opacity: 0.85;
    }
  `,

  externalIcon: css`
    display: inline-block;
    width: 0.7em;
    height: 0.7em;
    margin-left: 0.35em;
    vertical-align: baseline;
    transform: translateY(0.12em);
    opacity: 0.55;
    color: color-mix(in oklch, var(--cv-muted) 70%, var(--cv-text));
  `,

  title: css`
    margin: 0;
    color: color-mix(in oklch, var(--cv-text) 92%, white);
    font-family: var(--cv-font-body);
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.64;
  `,

  meta: css`
    margin: 0;
    color: color-mix(in oklch, var(--cv-muted) 85%, black);
    font-family: var(--cv-font-body);
    font-size: 0.875rem;
    font-style: italic;
    font-weight: 500;
    line-height: 1.64;
  `,

  copy: css`
    display: grid;
    gap: 0.6rem;
    font-family: var(--cv-font-body);
    font-size: 0.875rem;
    line-height: 1.64;

    p {
      margin: 0;
    }
  `,
};
