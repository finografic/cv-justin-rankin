import { css } from '@emotion/react';

const PRIMARY = 'var(--colors-primary)';
const FONT_BODY = '"Roboto", "Geist", sans-serif';
const FONT_HEAD = '"Raleway Variable", "Raleway", sans-serif';

export const printEditionStyles = css`
  /* ─── html scale — makes rem consistent for screen preview and print ─── */

  .pe-edition {
    font-size: 65%;
  }

  @media print {
    html {
      font-size: 67%;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    html,
    html body {
      background: #fff !important;
      color: inherit;
      margin: 0;
    }
  }

  /* ─── @page: A4 + footer in print margin boxes ─── */

  @page {
    size: A4;
    margin: 10mm 8mm 16mm;

    @bottom-left {
      content: 'Justin Rankin  ·  Software Engineer  ·  Brisbane, Australia';
      font-family: 'Roboto', sans-serif;
      font-size: 6.5pt;
      color: #999;
      border-top: 0.5pt dashed #ccc;
      padding-top: 4pt;
      width: 100%;
    }

    @bottom-right {
      content: counter(page) ' / 2';
      font-family: 'Roboto', sans-serif;
      font-size: 6.5pt;
      color: #999;
      border-top: 0.5pt dashed #ccc;
      padding-top: 4pt;
    }
  }

  /* ─── Shell: paper preview on screen ─── */

  .pe-shell {
    min-height: 100vh;
    background: #d8d8d8;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem 4rem;
    gap: 2rem;
  }

  .pe-paper {
    background: #fff;
    width: 210mm;
    padding: 10mm 8mm;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
    font-family: ${FONT_BODY};
    color: #1a1a1a;
    font-size: 1rem;
    line-height: 1.5;
  }

  @media print {
    .pe-shell {
      background: none !important;
      padding: 0 !important;
      display: block;
      gap: 0;
    }

    .pe-paper {
      width: 100% !important;
      padding: 0 !important;
      box-shadow: none !important;
    }
  }

  /* ─── Header ─── */

  .pe-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.2rem;
    margin-bottom: 1.4rem;
    padding-bottom: 0.9rem;
    border-bottom: 1.5px solid #e4e4e4;
  }

  .pe-header-content {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    flex: 1;
    min-width: 0;
  }

  .pe-header-text {
    flex: 1;
    min-width: 0;
  }

  .pe-name {
    font-family: ${FONT_HEAD};
    font-size: 2.1rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #1a1a1a;
    margin: 0 0 0.15rem;
    line-height: 1.1;
  }

  .pe-positioning {
    font-family: ${FONT_HEAD};
    font-size: 1.05rem;
    font-weight: 600;
    color: ${PRIMARY};
    margin: 0 0 0.18rem;
    line-height: 1.2;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .pe-strapline {
    font-size: 0.85rem;
    color: #666;
    margin: 0;
    line-height: 1.4;
  }

  .pe-header-qr {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    flex-shrink: 0;
  }

  .pe-qr-label {
    font-size: 0.66rem;
    color: #999;
    text-align: center;
    margin: 0;
    line-height: 1.2;
    white-space: nowrap;
  }

  /* ─── Two-column content grid ─── */

  .pe-content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;
    align-items: start;
  }

  .pe-col {
    min-width: 0;
  }

  .pe-col--left {
    padding-right: 0.8rem;
    border-right: 1px solid #ebebeb;
  }

  @media print {
    .pe-content-grid {
      gap: 1.2rem !important;
    }

    .pe-col {
      display: block;
      overflow: visible;
    }
  }

  /* ─── Section ─── */

  .pe-section {
    margin-bottom: 1.15rem;
  }

  .pe-section:last-child {
    margin-bottom: 0;
  }

  .pe-section-heading {
    font-family: ${FONT_HEAD};
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: ${PRIMARY};
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 0.22rem;
    margin: 0 0 0.55rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ─── Contact ─── */

  .pe-contact-list {
    list-style: none;
    margin: 0 0 0.35rem;
    padding: 0;
    font-size: 0.84rem;
    line-height: 1.75;

    & li {
      color: #333;
    }

    & a {
      color: inherit;
      text-decoration: none;
    }
  }

  .pe-work-rights {
    font-size: 0.75rem;
    color: #999;
    margin: 0.15rem 0 0;
    line-height: 1.4;
  }

  /* ─── Profile ─── */

  .pe-section-profile p {
    font-size: 0.85rem;
    line-height: 1.55;
    color: #333;
    margin: 0;
  }

  /* ─── Technologies ─── */

  .pe-tech-list {
    display: flex;
    flex-direction: column;
    gap: 0.38rem;
  }

  .pe-tech-group {
    font-size: 0.82rem;
    line-height: 1.4;
  }

  .pe-tech-category {
    font-weight: 700;
    color: #555;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: block;
    margin-bottom: 0.06rem;
  }

  .pe-tech-items {
    color: ${PRIMARY};
    font-weight: 600;
    font-size: 0.82rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ─── Education ─── */

  .pe-edu-institution {
    font-weight: 600;
    font-size: 0.85rem;
    color: #1a1a1a;
    margin: 0 0 0.1rem;
  }

  .pe-edu-degree {
    font-size: 0.8rem;
    color: #555;
    margin: 0 0 0.1rem;
  }

  .pe-edu-location {
    font-size: 0.76rem;
    color: #999;
    margin: 0;
  }

  /* ─── Languages ─── */

  .pe-lang-list {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0.83rem;
    line-height: 1.7;

    & strong {
      color: #1a1a1a;
    }
  }

  /* ─── Work Experience ─── */

  .pe-work-list {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .pe-work-entry {
    padding-bottom: 0.85rem;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  .pe-work-company {
    font-family: ${FONT_HEAD};
    font-size: 1rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 0.1rem;
    line-height: 1.2;

    & a {
      color: inherit;
      text-decoration: none;
    }
  }

  .pe-work-role {
    font-size: 0.86rem;
    font-weight: 600;
    color: ${PRIMARY};
    margin: 0 0 0.08rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .pe-work-meta {
    font-size: 0.76rem;
    color: #999;
    margin: 0 0 0.38rem;
  }

  .pe-work-desc {
    font-size: 0.82rem;
    line-height: 1.5;
    color: #333;
    margin: 0 0 0.28rem;
  }

  .pe-work-tech {
    font-size: 0.76rem;
    font-weight: 600;
    color: ${PRIMARY};
    margin: 0;
    line-height: 1.4;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ─── Projects ─── */

  .pe-project-list {
    display: flex;
    flex-direction: column;
    gap: 0.72rem;
  }

  .pe-project {
    padding-bottom: 0.68rem;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  .pe-project-title {
    font-family: ${FONT_HEAD};
    font-size: 0.88rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 0.18rem;
    line-height: 1.3;

    & a {
      color: inherit;
      text-decoration: none;
    }
  }

  .pe-project-meta {
    font-size: 0.72rem;
    color: #999;
    margin: 0 0 0.15rem;
  }

  .pe-project-desc {
    font-size: 0.79rem;
    line-height: 1.45;
    color: #444;
    margin: 0;
  }

  /* ─── Page break ─── */

  .pe-page-break {
    display: none;
  }

  @media print {
    .pe-page-break {
      display: block;
      break-after: page;
      page-break-after: always;
    }

    .pe-work-entry,
    .pe-project {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .pe-section-heading {
      break-after: avoid;
      page-break-after: avoid;
    }
  }

  /* ─── Screen-only footer preview ─── */

  .pe-footer-preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
    padding-top: 0.6rem;
    border-top: 1px dashed #ccc;
    font-size: 0.72rem;
    color: #999;
  }

  @media print {
    .pe-footer-preview {
      display: none;
    }
  }
`;
