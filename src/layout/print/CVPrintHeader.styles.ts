import { css } from '@emotion/react';

import { styles as webStyles } from '../web/CVHeader.styles';

/** Masks faint grey ring on print photo / DS avatar border (zero-blur white halo). */
const avatarEdgeMask = css`
  border: none !important;
  outline: 3px solid #fff !important;
  outline-offset: 0;
  box-shadow: 0 0 0 4px #fff !important;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
`;

export const styles = {
  header: css`
    ${webStyles.header}
    /* Size first column to avatar; text and QR follow in flow */
    grid-template-columns: auto minmax(0, 1fr) auto;
    column-gap: 1.4rem;
    row-gap: 0.95rem;
    /* Override web CVHeader margin-bottom: 2.5rem */
    margin-bottom: 0;

    & > [data-scope='avatar'] {
      ${avatarEdgeMask}
      justify-self: start;
      background-color: #fff;
    }

    /* Web header adds margin on col 2 — grid gap handles spacing here */
    div:nth-of-type(2) {
      margin-left: 0;
    }

    @media print {
      column-gap: 1.35rem;
      row-gap: 1rem;
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: center;
      margin-bottom: 0;
      padding-bottom: 0;

      div:nth-of-type(2) {
        margin-left: 0;
        min-width: 0;
      }
    }
  `,

  text: css`
    min-width: 0;
  `,

  name: css`
    ${webStyles.name}
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    @media print {
      margin-top: 0 !important;
      font-size: 1.66rem !important;
      line-height: 1.15 !important;
    }
  `,

  positioning: css`
    ${webStyles.positioning}
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    @media print {
      font-size: 1.1rem !important;
      line-height: 1.2 !important;
    }
  `,

  strap: css`
    ${webStyles.strap}
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    @media print {
      margin-top: 0.2rem !important;
      font-size: 0.9rem !important;
      line-height: 1.4 !important;
    }
  `,

  qr: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    flex-shrink: 0;
    align-self: center;
    padding-top: 0.25rem;

    @media print {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  `,

  qrLabel: css`
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--colors-primary);
    text-align: center;
    margin-top: 0.15rem;
    line-height: 1.2;
    white-space: nowrap;

    @media print {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  `,
};
