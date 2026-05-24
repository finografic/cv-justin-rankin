import { AvatarDS } from '@finografic/design-system';
import photo from 'assets/justin.png';
import type { ReactNode } from 'react';

import { styles } from './CVHeader.styles';

interface CVHeaderProps {
  name: string;
  positioning: string;
  strapline: string;
}

export function CVHeader({ name, positioning, strapline }: CVHeaderProps): ReactNode {
  return (
    <div css={styles.wrap}>
      <AvatarDS alt="Justin Rankin" size="2xl" src={photo} variant="elevated" shape="rounded" />
      <div>
        <h1 css={styles.name}>{name}</h1>
        <p className="cv-accent" css={styles.positioning}>
          {positioning}
        </p>
        <p css={styles.strap}>{strapline}</p>
      </div>
    </div>
  );
}
