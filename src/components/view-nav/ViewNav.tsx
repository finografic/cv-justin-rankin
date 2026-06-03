import { SwitchDS } from '@finografic/design-system/forms';
import type { ReactNode } from 'react';

import type { CvView } from 'types/cv-view.types';

import { styles } from './ViewNav.styles';

function buildViewHref(view: CvView): string {
  const url = new URL(globalThis.location.href);
  url.searchParams.delete('edition');
  if (view === 'condensed') {
    url.searchParams.set('view', 'condensed');
  } else {
    url.searchParams.delete('view');
  }
  return `${url.pathname}${url.search}${url.hash}`;
}

interface ViewNavProps {
  view: CvView;
}

export function ViewNav({ view }: ViewNavProps): ReactNode {
  const isCondensed = view === 'condensed';

  return (
    <nav aria-label="CV view" className="cv-view-nav" css={styles.bar}>
      <SwitchDS
        checked={isCondensed}
        label="Condensed"
        onChange={(checked) => {
          globalThis.location.assign(buildViewHref(checked ? 'condensed' : 'full'));
        }}
        palette="primary"
        size="sm"
      />
      <button
        className="cv-view-nav__pdf"
        css={styles.pdfButton}
        onClick={() => globalThis.print()}
        type="button"
      >
        PDF
      </button>
    </nav>
  );
}
