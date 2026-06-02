import { css } from '@emotion/react';

const PRIMARY = 'var(--colors-primary)';

export const styles = {
  header: css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.2rem;
    margin-bottom: 1.4rem;
    padding-bottom: 0;

    @media print {
      margin-bottom: 0.9rem !important;
      padding-bottom: 0.6rem !important;
    }

    [data-scope='avatar'] {
      border: none !important;
      box-shadow: none !important;
      outline: none !important;
      ring: none !important;
    }
  `,

  headerContent: css`
    display: flex;
    align-items: center;
    gap: 1.1rem;
    flex: 1;
    min-width: 0;
  `,

  headerText: css`
    flex: 1;
    min-width: 0;
  `,

  name: css`
    font-family: var(--cv-font-heading);
    font-size: 2.1rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--colors-secondary-lighter);
    margin: 0 0 0.15rem;
    line-height: 1.1;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    @media print {
      font-size: 1.85rem !important;
    }
  `,

  positioning: css`
    font-family: var(--cv-font-heading);
    font-size: 1.05rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: ${PRIMARY};
    margin: 0 0 0.18rem;
    line-height: 1.2;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    @media print {
      font-size: 0.95rem !important;
    }
  `,

  strapline: css`
    font-family: var(--cv-font-body);
    font-size: 0.85rem;
    color: var(--cv-muted);
    margin: 0;
    line-height: 1.4;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    @media print {
      font-size: 0.78rem !important;
    }
  `,

  headerQr: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    flex-shrink: 0;
  `,

  qrLabel: css`
    font-size: 0.66rem;
    color: #999;
    text-align: center;
    margin: 0;
    line-height: 1.2;
    white-space: nowrap;
  `,
};
