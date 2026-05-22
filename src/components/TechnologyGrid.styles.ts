import { css } from '@emotion/react';

export const styles = {
  groupList: css`
    display: grid;
    gap: 1rem;
  `,

  group: css`
    display: grid;
    gap: 0.5rem;
  `,

  groupHeading: css`
    margin: 0;
    font-family: var(--cv-font-heading);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  `,

  chips: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    list-style: none;
    margin: 0;
    padding: 0;
  `,

  chip: css`
    padding: 0.28rem 0.55rem;
    border: 1px solid var(--colors-primary-xxlight);
    border-radius: var(--cv-radius-sm);
    background-color: var(--colors-primary-xxxlight);
    font-family: var(--cv-font-heading);
    font-size: 0.8rem;
    font-weight: 600;

    @media print {
      background-color: transparent;
      border-color: #c6c6c6;
    }
  `,

  note: css`
    margin: 0;
    color: var(--cv-muted);
    font-size: 0.9rem;
  `,
};
