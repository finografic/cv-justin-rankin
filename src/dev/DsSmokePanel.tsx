import { Badge, Button, Callout, Card } from '@finografic/design-system';
import type { ReactNode } from 'react';

import { styles } from './DsSmokePanel.styles';

/**
 * Dev-only panel to verify linked @finografic/design-system + Panda recipe CSS.
 * Open with ?ds-smoke=1 (hidden from print via screen-only).
 */
export function DsSmokePanel(): ReactNode {
  return (
    <section aria-label="Design system smoke test" className="screen-only" css={styles.panel}>
      <h2 css={styles.title}>Design system smoke test</h2>
      <p css={styles.hint}>
        Linked DS recipes + tokens. If buttons/badges look unstyled, run pnpm panda:codegen and ensure DS
        watch/build is running.
      </p>
      <div css={styles.stack}>
        <div css={styles.row}>
          <Button palette="primary" variant="solid">
            Primary solid
          </Button>
          <Button palette="secondary" variant="outline">
            Secondary outline
          </Button>
          <Badge palette="primary" variant="soft">
            Badge
          </Badge>
        </div>
        <Callout status="success">Callout — success palette from DS recipes</Callout>
        <Card size="sm" variant="outlined">
          Card — outlined variant (DS Card recipe)
        </Card>
      </div>
    </section>
  );
}
