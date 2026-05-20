import { css } from '@emotion/react';

export const printStyles = css({
  '@page': {
    size: 'A4',
    margin: '8mm',
  },
  '@media print': {
    'html': {
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
      fontSize: '90%',
    },
    'html, body': {
      backgroundColor: '#ffffff',
      color: 'inherit',
    },
    'body': {
      margin: 0,
    },
    '.screen-only': {
      display: 'none !important',
    },
    '.print-stack': {
      width: '100% !important',
      maxWidth: 'none !important',
      padding: '0 !important',
      margin: '0 !important',
    },
    '.print-break-before': {
      breakBefore: 'auto',
      pageBreakBefore: 'auto',
    },
    '.print-avoid-break': {
      breakInside: 'avoid',
      pageBreakInside: 'avoid',
    },
    '.print-tight': {
      gap: '1rem !important',
    },
    '.cv-page-header': {
      marginBottom: '1.4rem !important',
    },
    '.cv-content-grid': {
      display: 'flex !important',
      gap: '1rem !important',
      alignItems: 'start !important',
    },
    '.cv-column': {
      display: 'block !important',
      alignContent: 'start !important',
    },
    '.cv-column--sidebar': {
      flex: '0 0 34% !important',
      maxWidth: '34% !important',
      paddingRight: '0.35rem',
    },
    '.cv-column--main': {
      flex: '1 1 auto !important',
      maxWidth: '66% !important',
      paddingLeft: '0.35rem',
    },
    '.cv-section': {
      marginBottom: '1rem',
      breakInside: 'auto',
      pageBreakInside: 'auto',
    },
    '.cv-section h2': {
      marginBottom: '0.2rem',
    },
    '.cv-section article + article': {
      marginTop: '0.45rem',
    },
    'a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
});
