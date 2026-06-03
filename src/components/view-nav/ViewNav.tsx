import { css } from '@emotion/react';
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
  return (
    <nav aria-label="CV view" className="cv-view-nav" css={styles.bar}>
      <div css={styles.group}>
        <a
          aria-current={view === 'full' ? 'page' : undefined}
          css={css(styles.link, view === 'full' && styles.linkActive)}
          href={buildViewHref('full')}
        >
          Full
        </a>
        <span css={styles.separator}>|</span>
        <a
          aria-current={view === 'condensed' ? 'page' : undefined}
          css={css(styles.link, view === 'condensed' && styles.linkActive)}
          href={buildViewHref('condensed')}
        >
          Condensed
        </a>
      </div>
      <span css={styles.separator}>|</span>
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
