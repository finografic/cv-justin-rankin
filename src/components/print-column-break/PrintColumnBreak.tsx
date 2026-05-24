import type { Interpolation } from '@emotion/react';
import type { ReactNode } from 'react';

import { PRINT_BREAK_CLASS } from 'types/print.types';

import { styles } from './PrintColumnBreak.styles';

export { PRINT_BREAK_CLASS };

export interface PrintColumnBreakProps {
  /**
   * Controls where the page break lands relative to this marker (print only).
   *
   * **`before`** (default) — break *before* the marker. Everything **after** `<PrintColumnBreak />`
   * starts on the next page. Same as placing the marker immediately above the content you want
   * on page 2.
   *
   * **`after`** — break *after* the marker. Everything **before** it stays on the current page;
   * the next content starts on a new page. Same as placing the marker immediately below the
   * block that should finish page 1 (e.g. after Core technology pills).
   *
   * For list data, prefer `printBreakAfter: true` on the item — renderers emit
   * `<PrintColumnBreak when="after" />` for you.
   */
  when?: 'before' | 'after';
  className?: string;
}

/**
 * Invisible print-only rule. Place inside `aside` or `main` where that column should
 * start a new page. Hidden on screen; does not affect screen layout.
 *
 * Or set `className={PRINT_BREAK_CLASS.after}` on any element instead of a sibling `<hr>`.
 */
export function PrintColumnBreak({ when = 'before', className }: PrintColumnBreakProps): ReactNode {
  const classNames = [
    when === 'after' ? PRINT_BREAK_CLASS.after : PRINT_BREAK_CLASS.before,
    'print-column-break',
    when === 'after' && 'print-column-break--after',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const breakStyles = when === 'after' ? ([styles.break, styles.breakAfter] as Interpolation) : styles.break;

  return <hr aria-hidden className={classNames} css={breakStyles} />;
}
