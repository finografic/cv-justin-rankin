import { css } from '@emotion/react';

export const stylesPrint = css`
  @page {
    size: A4;
    margin: 8mm;
  }

  .print-only-section {
    display: none !important;
  }

  @media print {
    html {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      font-size: 75%;
    }

    html,
    html body {
      background-color: #ffffff;
      color: inherit;
    }

    html body {
      margin: 0;
    }

    .screen-only,
    .screen-only-section {
      display: none !important;
    }

    .print-only-section {
      display: block !important;
    }

    .print-stack {
      width: 100% !important;
      max-width: none !important;
      padding: 0 !important;
      margin: 0 !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      background-color: #ffffff !important;
    }

    .cv-layout-shell {
      padding: 0 !important;
      background-color: #ffffff !important;
      min-height: 0 !important;
    }

    .print-break-before {
      break-before: auto;
      page-break-before: auto;
    }

    .print-column-break,
    .print-break-before-page {
      break-before: page;
      page-break-before: always;
    }

    .print-column-break--after,
    .print-break-after-page {
      break-before: auto;
      page-break-before: auto;
      break-after: page;
      page-break-after: always;
    }

    .cv-content-grid,
    .cv-column {
      break-inside: auto;
      page-break-inside: auto;
    }

    .print-avoid-break {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .print-tight {
      gap: 1rem !important;
    }

    .cv-content-grid {
      display: grid !important;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
      gap: 1.5rem !important;
      align-items: start !important;
    }

    .cv-header,
    .cv-page-header {
      gap: 0.65rem !important;
      grid-template-columns: 4.75rem minmax(0, 1fr) !important;
      align-items: center !important;
      margin-bottom: 2.25rem !important;
    }

    .cv-header [data-scope='avatar'],
    .cv-page-header [data-scope='avatar'] {
      width: 4.75rem !important;
      height: 4.75rem !important;
    }

    .cv-header h1,
    .cv-page-header h1 {
      margin-top: 0 !important;
      font-size: 1.45rem !important;
      line-height: 1.15 !important;
    }

    .cv-header .cv-accent,
    .cv-page-header .cv-accent {
      font-size: 1.05rem !important;
      line-height: 1.2 !important;
    }

    .cv-header p:not(.cv-accent),
    .cv-page-header p:not(.cv-accent) {
      margin-top: 0.2rem !important;
      font-size: 0.85rem !important;
      line-height: 1.4 !important;
    }

    .cv-column {
      display: block !important;
      min-width: 0;
      align-content: start !important;
      overflow: visible !important;
      position: relative !important;
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

    .cv-section-languages h2 {
      margin-bottom: 1.5rem;
    }

    .cv-section article + article {
      margin-top: 0.45rem;
    }

    .cv-section-technical-projects article + article,
    .cv-section-sidebar-projects article + article {
      margin-top: 0.75rem;
    }

    .cv-section-technical-projects div + .heading-category {
      break-before: auto;
      padding-top: 0.25rem;
    }

    /* Long entries (work, projects) flow across pages — no giant gaps */
    .cv-section-work-experience article.print-avoid-break,
    .cv-section-technical-projects article.print-avoid-break,
    .cv-section-sidebar-projects article.print-avoid-break {
      break-inside: auto !important;
      page-break-inside: auto !important;
    }

    /* Use block flow for work entries — CSS grid miscalculates item Y after break-inside:avoid
       pushes children across page boundaries, causing Apple/Metropolis overlap */
    .cv-section-work-experience > div {
      display: block !important;
    }

    .cv-section-work-experience article + article {
      margin-top: 1rem;
    }

    /* Individual elements stay intact — no mid-paragraph splits */
    .cv-section-work-experience article h3,
    .cv-section-work-experience article p,
    .cv-section-work-experience article ul,
    .cv-section-technical-projects article h3,
    .cv-section-technical-projects article p,
    .cv-section-sidebar-projects article h3,
    .cv-section-sidebar-projects article p {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .cv-section-contact > ul {
      font-size: 0.9rem !important;
      line-height: 1.5 !important;
      & + p {
        margin-top: 0 !important;
      }
    }

    .cv-section-contact > ul > li {
      padding: 0.12rem 0.2rem !important;
    }

    .cv-section-contact > ul > li > span {
      font-weight: 500 !important;
    }

    .cv-section-technologies ul li,
    .work-entry-technologies ul li {
      font-size: 0.738rem !important;
      font-weight: 550 !important;
      padding: 0.36rem 0.59rem !important;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
