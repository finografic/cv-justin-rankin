import { css } from '@emotion/react';

export const styles = {
  list: css`
    display: grid;
    gap: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 2;
  `,

  item: css`
    margin: 0;
    padding: 0.35rem 0.2rem;
  `,

  row: css`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--cv-font-body);
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.5;
    text-transform: lowercase;
    color: var(--colors-primary);

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: var(--cv-text);
      }
    }
  `,

  icon: css`
    flex-shrink: 0;
    width: 0.875rem;
    height: 0.875rem;
    color: var(--colors-primary);
  `,

  iconLinkedIn: css`
    flex-shrink: 0;
    width: 0.875rem;
    height: 0.875rem;
    color: var(--colors-primary);
    opacity: 0.65;
  `,

  iconGlobe: css`
    flex-shrink: 0;
    width: 0.875rem;
    height: 0.875rem;
    color: var(--colors-primary);
    opacity: 0.85;
    transform: scale(1.15);
    transform-origin: center;
  `,

  note: css`
    margin: 0.75rem 0 0;
    padding: 0 0.2rem;
    color: var(--cv-text);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-transform: none;
  `,
};
