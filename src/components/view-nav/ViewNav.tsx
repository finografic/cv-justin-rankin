import { SwitchDS } from '@finografic/design-system/forms';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import type { CvView } from 'types/cv-view.types';

import { VIEW_NAV_HIDE_AFTER_SCROLL_PX } from './view-nav.constants';
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = (): void => {
      setScrollY(globalThis.scrollY);
    };

    onScroll();
    globalThis.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      globalThis.removeEventListener('scroll', onScroll);
    };
  }, []);

  const hideNav = scrollY > VIEW_NAV_HIDE_AFTER_SCROLL_PX;

  return (
    <nav
      aria-hidden={hideNav}
      aria-label="CV view"
      className="cv-view-nav"
      css={css(styles.bar, hideNav && styles.barHidden)}
    >
      <SwitchDS
        checked={isCondensed}
        label="Condensed"
        onChange={(checked) => {
          globalThis.location.assign(buildViewHref(checked ? 'condensed' : 'full'));
        }}
        palette="primary"
        size="md"
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
