import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';

import { PRINT_PREVIEW_CLASS } from 'utils/print-preview.utils';

/** Shared layout/type rules — injected for real print and for `?print=1` browser preview. */
function printLayoutRules(root: string): SerializedStyles {
  return css`
    ${root} {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      font-size: 75%;
    }

    ${root},
    ${root} body {
      background-color: #ffffff;
      color: inherit;
    }

    ${root} body {
      margin: 0;
    }

    ${root} .screen-only {
      display: none !important;
    }

    ${root} .print-preview-only {
      display: block !important;
    }

    ${root} .print-stack {
      width: 100% !important;
      max-width: none !important;
      padding: 0 !important;
      margin: 0 !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      background-color: #ffffff !important;
    }

    ${root} .cv-layout-shell {
      padding: 1.5rem !important;
      background-color: #ffffff !important;
    }

    ${root} .print-break-before {
      break-before: auto;
      page-break-before: auto;
    }

    ${root} .print-column-break,
    ${root} .print-break-before-page {
      break-before: page;
      page-break-before: always;
    }

    ${root} .print-column-break--after,
    ${root} .print-break-after-page {
      break-before: auto;
      page-break-before: auto;
      break-after: page;
      page-break-after: always;
    }

    ${root} .cv-content-grid,
    ${root} .cv-column {
      break-inside: auto;
      page-break-inside: auto;
    }

    ${root} .print-avoid-break {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    ${root} .print-tight {
      gap: 1rem !important;
    }

    ${root} .cv-content-grid {
      display: grid !important;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
      gap: 1.5rem !important;
      align-items: start !important;
    }

    ${root} .cv-header,
    ${root} .cv-page-header {
      gap: 0.65rem !important;
      grid-template-columns: 4.75rem minmax(0, 1fr) !important;
      align-items: center !important;
      margin-bottom: 2.25rem !important;
    }

    ${root} .cv-header [data-scope='avatar'],
    ${root} .cv-page-header [data-scope='avatar'] {
      width: 4.75rem !important;
      height: 4.75rem !important;
    }

    ${root} .cv-header h1,
    ${root} .cv-page-header h1 {
      margin-top: 0 !important;
      font-size: 1.45rem !important;
      line-height: 1.15 !important;
    }

    ${root} .cv-header .cv-accent,
    ${root} .cv-page-header .cv-accent {
      font-size: 1.05rem !important;
      line-height: 1.2 !important;
    }

    ${root} .cv-header p:not(.cv-accent),
    ${root} .cv-page-header p:not(.cv-accent) {
      margin-top: 0.2rem !important;
      font-size: 0.85rem !important;
      line-height: 1.4 !important;
    }

    ${root} .cv-column {
      display: block !important;
      min-width: 0;
      align-content: start !important;
    }

    ${root} .cv-column--sidebar {
      padding-right: 0.5rem;
    }

    ${root} .cv-column--main {
      padding-left: 0.5rem;
    }

    ${root} .cv-accent,
    ${root} .cv-section h2 {
      color: var(--colors-primary) !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    ${root} .cv-section {
      margin-bottom: 1rem;
      break-inside: auto;
      page-break-inside: auto;
    }

    ${root} .cv-section h2 {
      margin-bottom: 0.2rem;
    }

    ${root} .cv-section article + article {
      margin-top: 0.45rem;
    }

    ${root} .cv-section-work-experience article.print-avoid-break {
      break-inside: auto !important;
      page-break-inside: auto !important;
    }

    ${root} .cv-section-work-experience article.print-avoid-break h3,
    ${root} .cv-section-work-experience article.print-avoid-break p {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    ${root} .cv-section-contact > ul {
      font-size: 0.9rem !important;
      line-height: 1.5 !important;
      & + p {
        margin-top: 0 !important;
      }
    }

    ${root} .cv-section-contact > ul > li {
      padding: 0.12rem 0.2rem !important;
    }

    ${root} .cv-section-contact > ul > li > span {
      font-weight: 500 !important;
    }

    ${root} .cv-section-technologies ul li,
    ${root} .work-entry-technologies ul li {
      font-size: 0.738rem !important;
      font-weight: 550 !important;
      padding: 0.36rem 0.59rem !important;
    }

    ${root} a {
      color: inherit;
      text-decoration: none;
    }
  `;
}

const printPreviewShell = css`
  html.${PRINT_PREVIEW_CLASS} {
    background-color: #ffffff;
  }

  html.${PRINT_PREVIEW_CLASS} body {
    min-height: 100vh;
  }

  html.${PRINT_PREVIEW_CLASS} .print-preview-only {
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 9999;
    margin: 0;
    padding: 0.35rem 0.6rem;
    border: 1px solid var(--colors-primary-light);
    border-radius: 0.35rem;
    background: #ffffff;
    color: var(--colors-secondary);
    font-family: var(--cv-font-body);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    box-shadow: var(--cv-shadow);
    pointer-events: none;
  }
`;

export const stylesPrint = css`
  @page {
    size: A4;
    margin: 8mm;
  }

  .print-preview-only {
    display: none;
  }

  @media print {
    ${printLayoutRules('html')}
  }

  ${printLayoutRules(`html.${PRINT_PREVIEW_CLASS}`)}
  ${printPreviewShell}
`;
