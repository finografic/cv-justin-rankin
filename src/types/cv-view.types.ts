/** CV content/layout variant — not the same as CSS `@media print`. */
export type CvView = 'full' | 'condensed';

export function parseCvViewParam(search: string): CvView {
  const params = new URLSearchParams(search);
  if (params.get('view') === 'condensed') return 'condensed';
  return 'full';
}
