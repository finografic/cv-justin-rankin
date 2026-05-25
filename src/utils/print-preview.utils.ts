/** Applied to `<html>` when `?print=1` — mirrors `@media print` rules in the browser. */
export const PRINT_PREVIEW_CLASS = 'cv-print-preview';

export function isPrintPreviewQuery(): boolean {
  return new URLSearchParams(globalThis.location.search).get('print') === '1';
}

/** Sync print-preview class from the URL query string. Returns whether preview is active. */
export function applyPrintPreviewMode(): boolean {
  const enabled = isPrintPreviewQuery();
  document.documentElement.classList.toggle(PRINT_PREVIEW_CLASS, enabled);
  return enabled;
}
