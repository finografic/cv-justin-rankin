import { AvatarDS } from '@finografic/design-system';
import photo from 'assets/justin-print.png';
import { QRCodeSVG } from 'qrcode.react';
import type { ReactNode } from 'react';

import type { CVHeaderProps } from 'types/header.types';

import { styles } from './CVPrintHeader.styles';

export function CVPrintHeader({ name, positioning, strapline, qrCode }: CVHeaderProps): ReactNode {
  return (
    <header css={styles.header}>
      <div className="pe-header-content" css={styles.headerContent}>
        <AvatarDS alt={name} shape="circle" size="2xl" src={photo} variant="elevated" />
        <div className="pe-header-text" css={styles.headerText}>
          <h1 css={styles.name}>{name}</h1>
          <p className="pe-positioning" css={styles.positioning}>
            {positioning}
          </p>
          <p css={styles.strapline}>{strapline}</p>
        </div>
      </div>
      {qrCode && (
        <div className="pe-header-qr" css={styles.headerQr}>
          <QRCodeSVG level="M" size={68} value={qrCode.url} />
          <p className="pe-qr-label" css={styles.qrLabel}>
            {qrCode.label}
          </p>
        </div>
      )}
    </header>
  );
}
