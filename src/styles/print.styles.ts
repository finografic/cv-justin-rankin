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
      margin-bottom: 1.4rem !important;
    }

    .cv-content-grid {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 1rem !important;
      align-items: start !important;
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

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
