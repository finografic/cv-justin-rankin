import { css } from '@emotion/react';

export const styles = {
  wrap: css`
    display: grid;
    gap: 0.15rem;
  `,

  companyHeading: css`
    margin: 0.5rem 0 0;
    padding: 0;
    font-family: var(--cv-font-body);
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.01em;
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
    width: 1em;
    height: 1em;
    margin-left: 0.5em;
    vertical-align: baseline;
    transform: translateY(0.12em);
    opacity: 0.45;
    color: color-mix(in oklch, var(--cv-muted) 70%, var(--cv-text));
  `,

  title: css`
    margin: 0;
    color: var(--colors-secondary-light);
    font-family: var(--cv-font-body);
    font-weight: 700;
  `,

  meta: css`
    margin: 0.25rem 0 0.33rem;
    font-family: var(--cv-font-body);
    font-style: italic;
    font-weight: 700;
    line-height: 1;
    color: var(--colors-secondary-lighter);
  `,

  copy: css`
    display: grid;
    gap: 0.6rem;
    font-family: var(--cv-font-body);
    font-size: 0.9rem;

    p {
      margin: 0;
    }
  `,
};
