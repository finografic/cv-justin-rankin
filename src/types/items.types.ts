export type ItemListVariant = 'list' | 'pills' | 'bullets';

export interface ItemListConfig {
  items: string[];
  variant?: ItemListVariant;
}
