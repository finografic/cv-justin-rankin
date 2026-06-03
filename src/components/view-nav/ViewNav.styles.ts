import { css } from '@emotion/react';

export const styles = {
  bar: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: color-mix(in srgb, var(--colors-primary) 6%, #fff);
    border-bottom: 1px solid color-mix(in srgb, var(--colors-primary) 18%, transparent);
    font-family: var(--cv-font-body);
    font-size: 0.82rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    @media print {
      display: none !important;
    }
  `,

  group: css`
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  `,

  link: css`
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    color: var(--colors-primary);
    border: 1px solid transparent;

    &:hover {
      background: color-mix(in srgb, var(--colors-primary) 8%, transparent);
    }
  `,

  linkActive: css`
    background: color-mix(in srgb, var(--colors-primary) 12%, transparent);
    border-color: color-mix(in srgb, var(--colors-primary) 35%, transparent);
    color: var(--colors-primary);
  `,

  separator: css`
    color: #bbb;
    user-select: none;
  `,

  pdfButton: css`
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    background: var(--colors-primary);
    border: 1px solid var(--colors-primary);

    &:hover {
      background: color-mix(in srgb, var(--colors-primary) 85%, #000);
    }
  `,
};
