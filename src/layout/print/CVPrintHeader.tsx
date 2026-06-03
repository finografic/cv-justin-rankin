import { AvatarDS } from '@finografic/design-system';
import photo from 'assets/justin-print.png';
import { QRCodeSVG } from 'qrcode.react';
import type { ReactNode } from 'react';

import type { CVHeaderProps } from 'types/header.types';

import { styles } from './CVPrintHeader.styles';

export function CVPrintHeader({ name, positioning, strapline, qrCode }: CVHeaderProps): ReactNode {
  return (
    <header className="cv-header" css={styles.header}>
      <AvatarDS alt={name} shape="circle" size="2xl" src={photo} variant="outlined" />
      <div css={styles.text}>
        <h1 css={styles.name}>{name}</h1>
        <p className="cv-accent" css={styles.positioning}>
          {positioning}
        </p>
        <p css={styles.strap}>{strapline}</p>
      </div>
      {qrCode ? (
        <div css={styles.qr}>
          <QRCodeSVG level="M" size={68} value={qrCode.url} />
          <p css={styles.qrLabel}>{qrCode.label}</p>
        </div>
      ) : null}
    </header>
  );
}
