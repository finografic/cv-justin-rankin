export type ItemListVariant = 'list' | 'pills' | 'bullets';

export interface ItemListConfig {
  items: string[];
  variant?: ItemListVariant;
  /** When `false`, pill rows stay on one line (default: wrap). */
  wrap?: boolean;
}
