/** CV content/layout variant — not the same as CSS `@media print`. */
export type CvView = 'full' | 'condensed';

export function parseCvViewParam(search: string): CvView {
  const params = new URLSearchParams(search);
  const view = params.get('view');
  if (view === 'condensed') return 'condensed';
  // Legacy query from early print handout work
  if (params.get('edition') === 'print') return 'condensed';
  return 'full';
}
