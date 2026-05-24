import { css } from '@emotion/react';

export const styles = {
  break: css`
    display: none;
    margin: 0;
    padding: 0;
    border: none;

    @media print {
      display: block;
      visibility: hidden;
      height: 0;
      width: 100%;
      margin: 0;
      padding: 0;
      border: none;
      break-before: page;
      page-break-before: always;
    }
  `,

  breakAfter: css`
    @media print {
      break-before: auto;
      page-break-before: auto;
      break-after: page;
      page-break-after: always;
    }
  `,
};
