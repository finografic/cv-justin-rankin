import { css } from '@emotion/react';

export const styles = {
  bar: css`
    position: fixed;
    top: 0.75rem;
    right: 1rem;
    z-index: 100;
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    background: color-mix(in srgb, #fff 92%, var(--colors-primary));
    border: 1px solid color-mix(in srgb, var(--colors-primary) 22%, transparent);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    font-family: var(--cv-font-body);
    font-size: 0.82rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    @media print {
      display: none !important;
    }
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
