import { css } from '@emotion/react';
import type { ReactNode } from 'react';
import type { ItemListVariant } from 'types';

import { styles } from './ItemList.styles';

export interface ItemListProps {
  items: string[];
  variant?: ItemListVariant;
  /** When omitted, no label is rendered (e.g. work-entry pills). */
  label?: string;
  /** `category` — section subheading style; `default` — inline bold label with colon. */
  labelStyle?: 'default' | 'category';
  /** When `false`, pill rows stay on one line. Defaults to wrapping. */
  wrap?: boolean;
  className?: string;
}

function ItemListLabel({
  label,
  labelStyle,
}: {
  label: string;
  labelStyle: 'default' | 'category';
}): ReactNode {
  if (labelStyle === 'category') {
    return <strong css={styles.labelCategory}>{label}</strong>;
  }

  return <strong>{label}:</strong>;
}

function ItemListItems({
  items,
  variant,
  wrap = true,
}: {
  items: string[];
  variant: ItemListVariant;
  wrap?: boolean;
}): ReactNode {
  if (variant === 'pills') {
    return (
      <ul css={css(styles.pills, wrap === false && styles.pillsNoWrap)}>
        {items.map((item) => (
          <li css={styles.pill} key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (variant === 'bullets') {
    return (
      <p css={styles.bullets}>
        {items.map((item, index) => (
          <span key={item}>
            {index > 0 ? <span css={styles.bulletSep}> · </span> : null}
            {item}
          </span>
        ))}
      </p>
    );
  }

  return <span css={styles.listText}>{items.join(', ')}</span>;
}

export function ItemList({
  items,
  variant = 'list',
  label,
  labelStyle = 'default',
  wrap = true,
  className,
}: ItemListProps): ReactNode {
  if (items.length === 0) {
    return null;
  }

  const isInlineList = variant === 'list' && label != null;

  if (isInlineList) {
    return (
      <p className={className} css={styles.wrapInline}>
        <ItemListLabel label={label} labelStyle={labelStyle} />{' '}
        <ItemListItems items={items} variant="list" wrap={wrap} />
      </p>
    );
  }

  return (
    <div className={className} css={styles.wrapBlock}>
      {label ? <ItemListLabel label={label} labelStyle={labelStyle} /> : null}
      <ItemListItems items={items} variant={variant} wrap={wrap} />
    </div>
  );
}
