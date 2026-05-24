/** Optional print-only page break after this item within its column. */
export interface PrintBreakAfter {
  printBreakAfter?: boolean;
}

/** Class names for print breaks on any element (alternative to `<PrintColumnBreak />`). */
export const PRINT_BREAK_CLASS = {
  before: 'print-break-before-page',
  after: 'print-break-after-page',
} as const;
