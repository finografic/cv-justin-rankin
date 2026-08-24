import type { Interpolation } from '@emotion/react';
import type { ReactNode } from 'react';

import { styles } from './ColonList.styles';

type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

interface ColonListProps<T> {
  items: readonly T[];
  labelKey: StringKeys<T>;
  valueKey: StringKeys<T>;
  listClassName?: string;
  listCss?: Interpolation;
  valueCss?: Interpolation;
}

export function ColonList<T>({
  items,
  labelKey,
  valueKey,
  listClassName = 'cv-colon-list',
  listCss,
  valueCss,
}: ColonListProps<T>): ReactNode {
  return (
    <ul className={listClassName} css={listCss}>
      {items.map((item) => {
        const label = item[labelKey];
        const value = item[valueKey];

        return (
          <li className="cv-colon-list__item" css={styles.item} key={String(label)}>
            <span className="cv-colon-list__label" css={styles.label}>
              {String(label)}
            </span>
            <span className="cv-colon-list__colon" css={styles.colon}>
              :
            </span>
            <span className="cv-colon-list__value" css={valueCss ?? styles.value}>
              {String(value)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
