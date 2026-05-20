import { css } from '@emotion/react';

export const printStyles = css({
  '@page': {
    size: 'A4',
    margin: '12mm',
  },
  '@media print': {
    ':root': {
      color: '#000000',
      backgroundColor: '#ffffff',
    },
    'html, body': {
      backgroundColor: '#ffffff',
    },
    'a': {
      color: '#000000',
      textDecoration: 'none',
    },
    '.screen-only': {
      display: 'none !important',
    },
    '.print-stack': {
      display: 'block !important',
      padding: '0 !important',
      maxWidth: 'none !important',
    },
    '.print-stack aside, .print-stack main': {
      display: 'block !important',
      width: '100% !important',
      padding: '0 !important',
    },
    '.print-break-before': {
      breakBefore: 'page',
      pageBreakBefore: 'always',
    },
    '.print-avoid-break': {
      breakInside: 'avoid',
      pageBreakInside: 'avoid',
    },
    '.print-tight': {
      gap: '0.75rem !important',
    },
  },
});
