import type { Interpolation } from '@emotion/react';
import type { ReactNode } from 'react';

import { styles } from './ColonList.styles';

export interface ColonListItem {
  label: string;
  value: string;
}

interface ColonListProps {
  items: ColonListItem[];
  listClassName?: string;
  listCss?: Interpolation;
  valueCss?: Interpolation;
}

export function ColonList({
  items,
  listClassName = 'cv-colon-list',
  listCss,
  valueCss,
}: ColonListProps): ReactNode {
  return (
    <ul className={listClassName} css={listCss}>
      {items.map((item) => (
        <li className="cv-colon-list__item" css={styles.item} key={item.label}>
          <span className="cv-colon-list__label" css={styles.label}>
            {item.label}
          </span>
          <span className="cv-colon-list__colon" css={styles.colon}>
            :
          </span>
          <span className="cv-colon-list__value" css={valueCss ?? styles.value}>
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  );
}
