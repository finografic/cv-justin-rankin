import { css } from '@emotion/react';

export const stylesPrint = css`
  @page {
    size: A4;
    margin: 8mm;
  }

  @media print {
    html {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      font-size: 90%;
    }

    html,
    body {
      background-color: #ffffff;
      color: inherit;
    }

    body {
      margin: 0;
    }

    .screen-only {
      display: none !important;
    }

    .print-stack {
      width: 100% !important;
      max-width: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }

    .print-break-before {
      break-before: auto;
      page-break-before: auto;
    }

    .print-avoid-break {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .print-tight {
      gap: 1rem !important;
    }

    .cv-page-header {
      margin-bottom: 1.25rem !important;
    }

    /* Match screen proportions — sidebar ~38%, main ~62% (not 50/50) */
    .cv-content-grid {
      display: grid !important;
      grid-template-columns: minmax(15rem, 38%) minmax(0, 1fr) !important;
      gap: 1.5rem !important;
      align-items: start !important;
    }

    /* Compact header — frees first-page space without changing screen layout */
    .cv-header {
      gap: 0.65rem !important;
      grid-template-columns: 4.75rem minmax(0, 1fr) !important;
      align-items: center !important;
    }

    .cv-header [data-scope='avatar'] {
      width: 4.75rem !important;
      height: 4.75rem !important;
    }

    .cv-header h1 {
      margin-top: 0 !important;
      font-size: 1.45rem !important;
      line-height: 1.15 !important;
    }

    .cv-header .cv-accent {
      font-size: 1.05rem !important;
      line-height: 1.2 !important;
    }

    .cv-header p:not(.cv-accent) {
      margin-top: 0.2rem !important;
      font-size: 0.85rem !important;
      line-height: 1.4 !important;
    }

    .cv-column {
      display: block !important;
      min-width: 0;
      align-content: start !important;
    }

    .cv-column--sidebar {
      padding-right: 0.5rem;
    }

    .cv-column--main {
      padding-left: 0.5rem;
    }

    .cv-accent,
    .cv-section h2 {
      color: var(--colors-primary) !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .cv-section {
      margin-bottom: 1rem;
      break-inside: auto;
      page-break-inside: auto;
    }

    .cv-section h2 {
      margin-bottom: 0.2rem;
    }

    .cv-section article + article {
      margin-top: 0.45rem;
    }

    /* Work entries are long — allow breaks so Sage starts on page 1 like the browser */
    .cv-section-work-experience article.print-avoid-break {
      break-inside: auto !important;
      page-break-inside: auto !important;
    }

    .cv-section-work-experience article.print-avoid-break h3,
    .cv-section-work-experience article.print-avoid-break p {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
