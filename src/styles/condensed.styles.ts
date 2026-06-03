import { css } from '@emotion/react';

import { printSectionHeadingStyles } from './section-heading.styles';

const PRIMARY = 'var(--colors-primary)';
const FONT_BODY = '"Roboto", "Geist", sans-serif';

// ─── Page margins — adjust these to taste ───────────────────────────────────
const PAGE_MARGIN_TOP = '10mm';
const PAGE_MARGIN_SIDES = '12mm';
const PAGE_MARGIN_BOTTOM = '14mm';

/**
 * Horizontal space between the two condensed content columns (screen and print).
 * Left column width stays fixed; increasing this only narrows the right column.
 */
export const PRINT_CONTENT_COL_GAP = '2.25rem';

/** Reference gutter for left-column width (original 50/50 split). Usually leave unchanged. */
const PRINT_CONTENT_COL_GAP_REF = '1.6rem';

/**
 * Base body text size on `.cv-condensed-paper` (paper preview). Section prose uses `em` from this;
 * tech pills use {@link PRINT_TECH_PILL_FONT_SIZE} instead (not scaled with body).
 */
export const PRINT_BODY_FONT_SIZE = '1rem';

/**
 * Body base inside `@media print` (browser print / PDF). Prose `em` sizes are relative to this.
 */
export const PRINT_BODY_FONT_SIZE_PRINT = '1rem';

/**
 * Technology pill label size only (`.cv-condensed-tech-items-list.pill .cv-condensed-tech-item`).
 * Absolute `rem` on the root — changing {@link PRINT_BODY_FONT_SIZE} does not affect pills.
 */
export const PRINT_TECH_PILL_FONT_SIZE = '0.7rem';

export const condensedViewStyles = css`
  /* ─── @page: A4 margins only ─── */

  @page {
    size: A4;
    margin: ${PAGE_MARGIN_TOP} ${PAGE_MARGIN_SIDES} ${PAGE_MARGIN_BOTTOM};
  }

  /* ─── Print rules ─── */

  @media print {
    .cv-view-nav {
      display: none !important;
    }

    html[data-cv-view='condensed'] {
      font-size: 62%;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    html,
    html body {
      background: #fff !important;
      color: inherit;
      margin: 0;
    }

    .cv-condensed-shell {
      background: none !important;
      padding: 0 !important;
      display: block;
    }

    .cv-condensed-paper {
      width: 100% !important;
      padding: 0 !important;
      box-shadow: none !important;
      font-size: ${PRINT_BODY_FONT_SIZE_PRINT} !important;
    }

    /* Print header — first column tracks avatar width; text column fills remainder */
    .cv-header {
      column-gap: 1.35rem !important;
      row-gap: 1rem !important;
      grid-template-columns: auto minmax(0, 1fr) auto !important;
      align-items: center !important;
      margin-bottom: 0 !important;
      padding-bottom: 0 !important;
    }

    .cv-header > [data-scope='avatar'] {
      border: none !important;
      outline: 3px solid #fff !important;
      outline-offset: 0;
      box-shadow: 0 0 0 4px #fff !important;
      background-color: #fff !important;
      justify-self: start !important;
      transform: translateY(-0.25rem);
      transform-origin: top left;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .cv-header > [data-scope='avatar'] img {
      border: none !important;
      outline: 2px solid #fff !important;
      outline-offset: 0;
      box-shadow: 0 0 0 3px #fff !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .cv-header > div:nth-of-type(2) {
      margin-left: 0 !important;
      min-width: 0;
    }

    /* Grid — same gutter as screen so PDF matches browser layout */
    .cv-condensed-content-grid {
      --cv-condensed-col-gap: ${PRINT_CONTENT_COL_GAP};
      --cv-condensed-col-gap-ref: ${PRINT_CONTENT_COL_GAP_REF};
      gap: var(--cv-condensed-col-gap) !important;
      grid-template-columns:
        calc((100% - var(--cv-condensed-col-gap-ref)) / 2)
        minmax(
          0,
          calc(
            (100% - var(--cv-condensed-col-gap-ref)) / 2 -
              (var(--cv-condensed-col-gap) - var(--cv-condensed-col-gap-ref))
          )
        ) !important;
    }

    .cv-condensed-col {
      display: block;
      overflow: visible;
    }

    /* Sections */
    .cv-condensed-section {
      margin-bottom: 0.7rem !important;
    }

    /* Contact */
    .cv-condensed-contact-list {
      line-height: 1.66 !important;
    }

    /* Tech */
    .cv-condensed-tech-list {
      gap: 0.2rem !important;
    }

    .cv-condensed-tech-group {
      gap: 0.02rem !important;
    }

    /* Work */
    .cv-condensed-work-list {
      gap: 0.52rem !important;
    }

    .cv-condensed-work-list .cv-entry--condensed {
      padding-bottom: 0.52rem !important;
    }

    .cv-condensed-work-list .cv-entry--condensed .cv-entry__meta {
      margin-bottom: 0.22rem !important;
    }

    .cv-condensed-work-list .cv-entry--condensed .cv-entry__body p {
      font-size: 0.78em !important;
      margin-bottom: 0.14rem !important;
    }

    .cv-condensed-work-list .cv-entry--condensed .cv-entry__tech {
      font-size: 0.72em !important;
    }

    /* Projects */
    .cv-condensed-project-list {
      gap: 0.42rem !important;
    }

    .cv-condensed-project-list .cv-entry--condensed {
      padding-bottom: 0.15rem !important;
    }

    .cv-condensed-project-list .cv-entry--condensed .cv-entry__body p {
      font-size: 0.76em !important;
    }
  }

  /* ─── Shell: centred A4 sheet (same layout as print; no separate preview scale) ─── */

  .cv-condensed-shell {
    min-height: 100vh;
    background: #e8e8e8;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem 2rem;
  }

  .cv-condensed-paper {
    background: #fff;
    padding: ${PAGE_MARGIN_TOP} ${PAGE_MARGIN_SIDES};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
    font-family: ${FONT_BODY};
    color: #1a1a1a;
    font-size: ${PRINT_BODY_FONT_SIZE};
    line-height: 1.5;
  }

  @media not print {
    .cv-condensed-paper {
      width: 320mm;
    }
  }

  /* ─── Two-column content grid ─── */

  .cv-condensed-content-grid {
    --cv-condensed-col-gap: ${PRINT_CONTENT_COL_GAP};
    --cv-condensed-col-gap-ref: ${PRINT_CONTENT_COL_GAP_REF};
    display: grid;
    grid-template-columns:
      calc((100% - var(--cv-condensed-col-gap-ref)) / 2)
      minmax(
        0,
        calc(
          (100% - var(--cv-condensed-col-gap-ref)) / 2 -
            (var(--cv-condensed-col-gap) - var(--cv-condensed-col-gap-ref))
        )
      );
    gap: var(--cv-condensed-col-gap);
    align-items: start;
  }

  .cv-condensed-col {
    min-width: 0;
  }

  /* ─── Section ─── */

  .cv-condensed-section {
    margin-bottom: 1.1rem;
  }

  .cv-condensed-section:last-child {
    margin-bottom: 0;
  }

  ${printSectionHeadingStyles}

  /* ─── Contact ─── */

  .cv-condensed-contact-list {
    list-style: none;
    margin: 0 0 0.35rem;
    padding: 0;
    font-size: 0.82em;
    line-height: 1.9;

    & a {
      color: inherit;
      text-decoration: none;
    }
  }

  .cv-condensed-contact-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.11rem 0;
    font-family: var(--cv-font-body);
    font-weight: 550;
    color: ${PRIMARY};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .cv-condensed-contact-icon {
    width: 1.05rem;
    height: 1.05rem;
    flex-shrink: 0;
    color: ${PRIMARY};
    opacity: 0.7;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .cv-condensed-contact-icon--mobile {
    width: 1.157625rem;
    height: 1.157625rem;
    opacity: 0.82;
    margin-right: -0.15rem;
  }

  .cv-condensed-work-rights {
    font-size: 0.75em;
    font-weight: 500;
    color: #333;
    margin: 0.17rem 0 0;
    line-height: 1.54;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ─── Profile ─── */

  .cv-condensed-section-profile p {
    font-size: 0.85em;
    line-height: 1.55;
    color: #333;
    margin: 0;
  }

  /* ─── Technologies ─── */

  .cv-condensed-tech-list {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .cv-condensed-tech-group {
    font-size: 0.82em;
    line-height: 1.4;
  }

  .cv-condensed-tech-category {
    font-family: var(--cv-font-body);
    font-weight: 700;
    color: #555;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: block;
    margin-top: 0.33rem !important;
    margin-bottom: 0.2rem;

    &:first-child {
      margin-top: 0;
    }
  }

  /* ── Default: inline comma-separated ── */

  .cv-condensed-tech-items-list:not(.pill) {
    display: inline;
    font-size: 0.8em;
    line-height: 1.33;
  }

  .cv-condensed-tech-item {
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

  /* ── Pill variant: add .pill to .cv-condensed-tech-items-list ── */

  .cv-condensed-tech-items-list.pill {
    display: flex;
    flex-wrap: wrap;
    gap: 0.22rem;
    margin-top: 0.15rem;
  }

  .cv-condensed-tech-items-list.pill .cv-condensed-tech-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--colors-primary) 10%, transparent);
    border: 0.5px solid color-mix(in srgb, var(--colors-primary) 30%, transparent);
    color: ${PRIMARY};
    padding: 0.35rem 0.42rem 0.18rem;
    line-height: 1.33;
    border-radius: 3px;
    font-size: ${PRINT_TECH_PILL_FONT_SIZE};
    font-weight: 600;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    &::after {
      content: none !important;
    }
  }

  /* ─── Education ─── */

  .cv-condensed-edu-institution {
    font-weight: 600;
    font-size: 0.85em;
    color: #1a1a1a;
    margin: 0 0 0.1rem;
  }

  .cv-condensed-edu-degree {
    font-size: 0.8em;
    color: #555;
    margin: 0 0 0.1rem;
  }

  .cv-condensed-edu-location {
    font-size: 0.76em;
    color: #999;
    margin: 0;
  }

  /* ─── Languages ─── */

  .cv-condensed-lang-list {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0.83em;
    line-height: 1.7;

    & li {
      margin: 0;
    }

    & .cv-colon-list__label,
    & .cv-colon-list__colon,
    & .cv-colon-list__value {
      display: inline-block;
    }

    & .cv-colon-list__label {
      width: 3.5rem;
      color: #1a1a1a;
      font-weight: 700;
    }

    & .cv-colon-list__colon {
      color: #b8b0a8;
      font-weight: 700;
      margin-right: 0.5rem;
    }

    & .cv-colon-list__value {
      color: #1a1a1a;
      font-weight: 400;
    }
  }

  /* ─── Work Experience ─── */

  .cv-condensed-work-list {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .cv-condensed-work-list .cv-entry--condensed {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  .cv-condensed-work-list .cv-entry--condensed .cv-entry__title {
    margin: 0 0 0.22rem;
    padding: 0;
    font-family: var(--cv-font-body);
    font-size: 0.96em;
    font-weight: 700;
    letter-spacing: 0.01em;
    line-height: 1.25;
    color: ${PRIMARY};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    & a {
      color: ${PRIMARY};
      text-decoration: none;
    }
  }

  .cv-condensed-work-list .cv-entry--condensed .cv-entry__subtitle {
    margin: 0 0 0.18rem;
    font-family: var(--cv-font-body);
    font-size: 0.86em;
    font-weight: 700;
    line-height: 1.3;
    color: var(--colors-secondary);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .cv-condensed-work-list .cv-entry--condensed .cv-entry__meta {
    margin: 0 0 0.42rem;
    font-family: var(--cv-font-body);
    font-size: 0.76em;
    font-style: italic;
    font-weight: 700;
    line-height: 1.2;
    color: var(--colors-secondary-lighter);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .cv-condensed-work-list .cv-entry--condensed .cv-entry__body p {
    font-size: 0.82em;
    line-height: 1.5;
    color: #333;
    margin: 0 0 0.28rem;
  }

  .cv-condensed-work-list .cv-entry--condensed .cv-entry__tech {
    font-size: 0.76em;
    font-weight: 600;
    color: ${PRIMARY};
    margin: 0.25rem 0 0;
    line-height: 1.4;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ─── Projects ─── */

  .cv-condensed-project-list {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .cv-condensed-project-list .cv-entry--condensed {
    padding-bottom: 0.65rem;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  .cv-condensed-project-list .cv-entry--condensed .cv-entry__title-row {
    font-family: var(--cv-font-body);
    font-size: 0.88em;
    font-weight: 700;
    color: ${PRIMARY};
    letter-spacing: 0.01em;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    margin: 0 0 0.1rem;
    line-height: 1.3;
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .cv-condensed-project-list .cv-entry--condensed .cv-entry__title {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    letter-spacing: inherit;

    & a {
      color: ${PRIMARY};
      text-decoration: none;
    }
  }

  .cv-condensed-project-list .cv-entry--condensed .cv-entry__meta--inline {
    font-size: 0.76em;
    line-height: 1.2;
    color: var(--colors-secondary-lighter);
    font-weight: 700;
    font-style: italic;
    font-family: ${FONT_BODY};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .cv-condensed-project-list .cv-entry--condensed .cv-entry__body p {
    font-size: 0.79em;
    line-height: 1.45;
    color: #444;
    margin: 0;
  }

  /* ─── Engineering Philosophy ─── */

  .cv-condensed-philosophy-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    font-size: 0.82em;
    line-height: 1.45;
  }

  .cv-condensed-philosophy-list .cv-colon-list__label,
  .cv-condensed-philosophy-list .cv-colon-list__colon,
  .cv-condensed-philosophy-list .cv-colon-list__value {
    display: inline;
  }

  .cv-condensed-philosophy-list .cv-colon-list__label {
    color: #1a1a1a;
    font-weight: 700;
  }

  .cv-condensed-philosophy-list .cv-colon-list__colon {
    color: #b8b0a8;
    font-weight: 700;
    margin: 0 0.35rem 0 0;
  }

  .cv-condensed-philosophy-list .cv-colon-list__value {
    color: #666;
  }

  /* ─── Multi-paragraph work description ─── */

  .cv-condensed-work-desc-multi p,
  .cv-entry__body p {
    font-size: 0.82em;
    line-height: 1.5;
    color: #333;
    margin: 0 0 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media print {
    .cv-condensed-work-desc-multi p,
    .cv-condensed-work-list .cv-entry--condensed .cv-entry__body p {
      font-size: 0.78em !important;
      margin-bottom: 0.18rem !important;
    }
  }
`;
