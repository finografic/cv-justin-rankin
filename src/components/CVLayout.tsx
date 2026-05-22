import type { PropsWithChildren, ReactNode } from 'react';

import { styles } from './CVLayout.styles';

export function CVLayout({ children }: PropsWithChildren): ReactNode {
  return (
    <div css={styles.shell}>
      <div className="print-stack" css={styles.paper}>
        {children}
      </div>
    </div>
  );
}
