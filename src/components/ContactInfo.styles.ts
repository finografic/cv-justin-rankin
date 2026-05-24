import { css } from '@emotion/react';

export const styles = {
  list: css`
    display: grid;
    gap: 0;
    list-style: none;
    margin: 0.75rem 0 0;
    padding: 0;
    line-height: 2;
  `,

  item: css`
    margin: 0;
    padding: 0.15rem 0.2rem;
  `,

  row: css`
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    font-family: var(--cv-font-body);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
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
    width: 1.15rem;
    height: 1.15rem;
    color: var(--colors-primary);
    /* margin-right: 2rem; */
    opacity: 0.66;
  `,

  iconLinkedIn: css`
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    color: var(--colors-primary);
    opacity: 0.66;
  `,

  iconGlobe: css`
    flex-shrink: 0;
    width: 1rem;
    height: 1.15rem;
    color: var(--colors-primary);
    opacity: 0.85;
    transform: scale(1.15);
    transform-origin: center;
    opacity: 0.66;
  `,

  note: css`
    margin: 0.4rem 0 1rem;
    padding: 0 0.2rem;
    color: var(--cv-text);
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    text-transform: none;
  `,
};
