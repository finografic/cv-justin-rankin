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
    width: 1.32rem;
    height: 1.32rem;
    color: var(--colors-primary);
    opacity: 0.66;
  `,

  /** Custom SVG marks (phone, linkedin, github) — ~15% larger than default contact icons. */
  iconCustom: css`
    flex-shrink: 0;
    width: 1.32rem;
    height: 1.32rem;
    opacity: 0.66;

    &.icon-phone {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: -0.2rem;
      transform: translateX(-0.1rem);
      opacity: 0.82;
    }

    &.icon-linkedin {
      transform: translateY(-0.2rem);
      opacity: 0.7;
    }

    &.icon-github {
      transform: scale(1.1) translateX(0.05rem);
      transform-origin: center;
    }

    &.icon-website {
      width: 1rem;
      height: 1.15rem;
      margin-left: 0.2rem;
      margin-right: 0.15rem;
      transform: scale(1.3);
      transform-origin: center;
    }
  `,

  note: css`
    margin: 0.5rem 0 1rem;
    padding: 0 0.2rem;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    text-transform: none;
  `,

  noteLine: css`
    display: block;
  `,
};
