import { css } from '@emotion/react';

const PRIMARY = 'var(--colors-primary)';
const FONT_BODY = '"Roboto", "Geist", sans-serif';

// ─── Page margins — adjust these to taste ───────────────────────────────────
const PAGE_MARGIN_TOP = '14mm';
const PAGE_MARGIN_SIDES = '12mm';
const PAGE_MARGIN_BOTTOM = '14mm';

export const printEditionStyles = css`
  /* ─── html scale for screen preview ─── */

  .pe-edition {
    font-size: 65%;
  }

  /* ─── @page: A4 margins only ─── */

  @page {
    size: A4;
    margin: ${PAGE_MARGIN_TOP} ${PAGE_MARGIN_SIDES} ${PAGE_MARGIN_BOTTOM};
  }

  /* ─── Print rules ─── */

  @media print {
    html {
      font-size: 60%;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    html,
    html body {
      background: #fff !important;
      color: inherit;
      margin: 0;
    }

    .pe-shell {
      background: none !important;
      padding: 0 !important;
      display: block;
    }

    .pe-paper {
      width: 100% !important;
      padding: 0 !important;
      box-shadow: none !important;
    }

    /* Header — tighter in print */
    .pe-header {
      margin-bottom: 0.9rem !important;
      padding-bottom: 0.6rem !important;
    }

    .pe-name {
      font-size: 1.85rem !important;
    }

    .pe-positioning {
      font-size: 0.95rem !important;
    }

    .pe-strapline {
      font-size: 0.78rem !important;
    }

    /* Grid */
    .pe-content-grid {
      gap: 1.1rem !important;
    }

    .pe-col {
      display: block;
      overflow: visible;
    }

    /* Sections */
    .pe-section {
      margin-bottom: 0.7rem !important;
    }

    .pe-section-heading {
      margin-bottom: 0.32rem !important;
      padding-bottom: 0.14rem !important;
    }

    /* Contact */
    .pe-contact-list {
      line-height: 1.55 !important;
    }

    /* Tech */
    .pe-tech-list {
      gap: 0.2rem !important;
    }

    .pe-tech-group {
      gap: 0.02rem !important;
    }

    /* Work */
    .pe-work-list {
      gap: 0.52rem !important;
    }

    .pe-work-entry {
      padding-bottom: 0.52rem !important;
    }

    .pe-work-meta {
      margin-bottom: 0.22rem !important;
    }

    .pe-work-desc {
      font-size: 0.78rem !important;
      margin-bottom: 0.14rem !important;
    }

    .pe-work-tech {
      font-size: 0.72rem !important;
    }

    /* Projects */
    .pe-project-list {
      gap: 0.42rem !important;
    }

    .pe-project {
      padding-bottom: 0.38rem !important;
    }

    .pe-project-desc {
      font-size: 0.76rem !important;
    }
  }

  /* ─── Shell: paper preview on screen ─── */

  .pe-shell {
    min-height: 100vh;
    background: #d4d4d4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem 4rem;
    gap: 2rem;
  }

  .pe-paper {
    background: #fff;
    width: 210mm;
    padding: ${PAGE_MARGIN_TOP} ${PAGE_MARGIN_SIDES};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
    font-family: ${FONT_BODY};
    color: #1a1a1a;
    font-size: 1rem;
    line-height: 1.5;
  }

  /* ─── Header ─── */

  .pe-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.2rem;
    margin-bottom: 1.4rem;
    padding-bottom: 0;
  }

  /* Remove avatar ring/shadow from DS elevated variant */
  .pe-header [data-scope='avatar'] {
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    ring: none !important;
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
  }

  .pe-positioning {
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
  }

  .pe-strapline {
    font-family: var(--cv-font-body);
    font-size: 0.85rem;
    color: var(--cv-muted);
    margin: 0;
    line-height: 1.4;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
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

  /* ─── Section ─── */

  .pe-section {
    margin-bottom: 1.1rem;
  }

  .pe-section:last-child {
    margin-bottom: 0;
  }

  .pe-section-heading {
    margin: 0 0 0.5rem;
    padding-bottom: 0.25rem;
    background-position: 0 100%;
    background-image: linear-gradient(
      90deg,
      color-mix(in oklch, var(--colors-primary) 50%, transparent) 30%,
      transparent 0
    );
    background-size: 6px 2px;
    background-repeat: repeat-x;
    color: var(--colors-primary);
    font-family: var(--cv-font-heading);
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ─── Contact ─── */

  .pe-contact-list {
    list-style: none;
    margin: 0 0 0.35rem;
    padding: 0;
    font-size: 0.9rem;
    line-height: 1.8;

    & a {
      color: inherit;
      text-decoration: none;
    }
  }

  .pe-contact-row {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    font-family: var(--cv-font-body);
    font-weight: 600;
    color: ${PRIMARY};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .pe-contact-icon {
    width: 0.95rem;
    height: 0.95rem;
    flex-shrink: 0;
    color: ${PRIMARY};
    opacity: 0.7;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
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
    gap: 0.35rem;
  }

  .pe-tech-group {
    font-size: 0.82rem;
    line-height: 1.4;
  }

  .pe-tech-category {
    font-family: var(--cv-font-body);
    font-weight: 700;
    color: #555;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: block;
    margin-top: 0.35rem;
    margin-bottom: 0.12rem;

    &:first-child {
      margin-top: 0;
    }
  }

  /* ── Default: inline comma-separated ── */

  .pe-tech-items-list {
    display: inline;
    font-size: 0.82rem;
    line-height: 1.5;
  }

  .pe-tech-item {
    color: ${PRIMARY};
    font-weight: 600;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    &:not(:last-child)::after {
      content: ', ';
      color: ${PRIMARY};
      font-weight: 600;
    }
  }

  /* ── Pill variant: add .pill to .pe-tech-items-list ── */

  .pe-tech-items-list.pill {
    display: flex;
    flex-wrap: wrap;
    gap: 0.22rem;
    margin-top: 0.15rem;
  }

  .pe-tech-items-list.pill .pe-tech-item {
    background: color-mix(in srgb, var(--colors-primary) 10%, transparent);
    border: 0.5px solid color-mix(in srgb, var(--colors-primary) 30%, transparent);
    color: ${PRIMARY};
    padding: 0.1rem 0.42rem;
    border-radius: 3px;
    font-size: 0.7rem;
    font-weight: 600;
    line-height: 1.5;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    &::after {
      content: none !important;
    }
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

    & li {
      margin: 0;
    }

    & strong,
    & .pe-lang-colon,
    & .pe-lang-level {
      display: inline-block;
    }

    & strong {
      width: 3.5rem;
      color: #1a1a1a;
      font-weight: 700;
    }

    & .pe-lang-colon {
      color: #b8b0a8;
      font-weight: 700;
      margin-right: 0.5rem;
    }

    & .pe-lang-level {
      color: #1a1a1a;
      font-weight: 400;
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
    font-family: var(--cv-font-heading);
    font-size: 1rem;
    font-weight: 700;
    color: var(--colors-secondary-lighter);
    margin: 0 0 0.1rem;
    line-height: 1.2;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    & a {
      color: inherit;
      text-decoration: none;
    }
  }

  .pe-work-role {
    font-family: var(--cv-font-body);
    font-size: 0.86rem;
    font-weight: 600;
    color: ${PRIMARY};
    margin: 0 0 0.08rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .pe-work-meta {
    font-family: var(--cv-font-body);
    font-size: 0.76rem;
    font-style: italic;
    color: var(--cv-muted);
    margin: 0 0 0.38rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
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
    gap: 0.7rem;
  }

  .pe-project {
    padding-bottom: 0.65rem;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  .pe-project-title {
    font-family: var(--cv-font-heading);
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--colors-secondary-lighter);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    margin: 0 0 0.1rem;
    line-height: 1.3;
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    flex-wrap: wrap;

    & a {
      color: inherit;
      text-decoration: none;
    }
  }

  .pe-project-meta {
    font-size: 0.72rem;
    color: #999;
    font-weight: 400;
    font-family: ${FONT_BODY};
  }

  .pe-project-desc {
    font-size: 0.79rem;
    line-height: 1.45;
    color: #444;
    margin: 0;
  }

  /* ─── Engineering Philosophy ─── */

  .pe-philosophy-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    font-size: 0.82rem;
    line-height: 1.45;
  }

  .pe-philosophy-title {
    color: #1a1a1a;
    font-weight: 700;
  }

  .pe-philosophy-desc {
    color: #666;
  }

  /* ─── Multi-paragraph work description ─── */

  .pe-work-desc-multi p {
    font-size: 0.82rem;
    line-height: 1.5;
    color: #333;
    margin: 0 0 0.28rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media print {
    .pe-work-desc-multi p {
      font-size: 0.78rem !important;
      margin-bottom: 0.18rem !important;
    }
  }

  /* ─── Full edition: slightly larger print font (2 pages, more room) ─── */

  @media print {
    html.pe-full {
      font-size: 62% !important;
    }
  }
`;
