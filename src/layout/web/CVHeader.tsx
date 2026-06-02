import { AvatarDS } from '@finografic/design-system';
import photo from 'assets/justin.png';
import type { ReactNode } from 'react';

import type { CVHeaderProps } from 'types/header.types';

import { styles } from './CVHeader.styles';

export function CVHeader({ name, positioning, strapline }: CVHeaderProps): ReactNode {
  return (
    <header className="cv-header" css={styles.header}>
      <AvatarDS alt={name} size="2xl" src={photo} variant="elevated" shape="circle" />
      <div>
        <h1 css={styles.name}>{name}</h1>
        <p className="cv-accent" css={styles.positioning}>
          {positioning}
        </p>
        <p css={styles.strap}>{strapline}</p>
      </div>
    </header>
  );
}
