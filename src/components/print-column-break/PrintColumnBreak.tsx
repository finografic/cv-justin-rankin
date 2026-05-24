import type { Interpolation } from '@emotion/react';
import type { ReactNode } from 'react';

import { styles } from './PrintColumnBreak.styles';

export interface PrintColumnBreakProps {
  /**
   * `before` — content after this marker starts on the next printed page (default).
   * `after` — content before this marker stays on the current page; break follows the marker.
   */
  when?: 'before' | 'after';
  className?: string;
}

/**
 * Invisible print-only rule. Place inside `aside` or `main` where that column should
 * start a new page. Hidden on screen; does not affect screen layout.
 */
export function PrintColumnBreak({ when = 'before', className }: PrintColumnBreakProps): ReactNode {
  const classNames = ['print-column-break', when === 'after' && 'print-column-break--after', className]
    .filter(Boolean)
    .join(' ');

  const breakStyles = when === 'after' ? ([styles.break, styles.breakAfter] as Interpolation) : styles.break;

  return <hr aria-hidden className={classNames} css={breakStyles} />;
}
