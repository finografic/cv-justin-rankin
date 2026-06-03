import { css } from '@emotion/react';

/** Web `CVSection` h2 — see `layout/web/CVSection.styles.ts`. */
export const WEB_SECTION_HEADING_FONT_SIZE = '1.15rem';

/** Condensed view: ~15% above legacy 0.78rem, below full. */
export const PRINT_SECTION_HEADING_FONT_SIZE = '0.9rem';

const sectionHeadingUnderline = css`
  padding-bottom: 0.2rem;
  background-position: 0 100%;
  background-image: linear-gradient(
    90deg,
    color-mix(in oklch, var(--colors-primary) 50%, transparent) 30%,
    transparent 0
  );
  background-size: 6px 2px;
  background-repeat: repeat-x;
`;

export const webSectionHeading = css`
  margin: 0;
  ${sectionHeadingUnderline};
  color: var(--colors-primary);
  font-family: var(--cv-font-heading);
  font-size: ${WEB_SECTION_HEADING_FONT_SIZE};
  font-weight: 700;
  text-transform: uppercase;

  @media print {
    border-bottom: 1px dotted var(--colors-primary-lighter);
    background: none;
  }
`;

export const printSectionHeadingStyles = css`
  .cv-condensed-section-heading {
    margin: 0 0 0.5rem;
    ${sectionHeadingUnderline};
    color: var(--colors-primary);
    font-family: var(--cv-font-heading);
    font-size: ${PRINT_SECTION_HEADING_FONT_SIZE};
    font-weight: 700;
    text-transform: uppercase;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  @media print {
    .cv-condensed-section-heading {
      margin-top: 1.2rem !important;
      margin-bottom: 0.85rem !important;
      padding-bottom: 0.1rem !important;
      border-bottom: 1px dotted var(--colors-primary-lighter);
      background: none;
    }
  }
`;
