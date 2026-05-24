import type { ReactNode } from 'react';

import { styles } from './PrintButton.styles';

function handlePrint(): void {
  globalThis.print();
}

export function PrintButton(): ReactNode {
  return (
    <button className="screen-only" css={styles.button} onClick={handlePrint} type="button">
      Print / Save PDF
    </button>
  );
}
