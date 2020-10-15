/** @jsx jsx */
import React, { Suspense } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useStore } from 'store';

// CONFIG
import { routes, pageTitles } from '_config';

// LAYOUT
import Sidebar from 'components/Sidebar';
import CV from 'containers/CV';
import IntlTest from 'components/IntlTest';

// STYLES
import { Global, jsx } from '@emotion/core';
import { cssGlobal } from 'styles/global';

// ============================================== //

// INTL FROM v1.9.0 CV

// LOCALES - INTL
import { getCurrentLocale } from 'store';
import { IntlProvider, RawIntlProvider } from 'react-intl';
import getIntl from 'utils/getIntl';

// ============================================== //

export default function App() {
  const { state, dispatch } = useStore();
  const { LOCALE } = getCurrentLocale();
  const { intl, messages } = getIntl(LOCALE);
  console.log('TRANSLATIONS:', messages);

  // TRAILING SLASH OPTIONS:
  // 1. <Redirect from="/:url*(/+)" to={route.path.slice(0, -1)} />
  // 2. <Redirect strict from={`${route.path}+'/'`} to={route.path} />
  // 3. {route.path !== '/' && /\/$/.test(route.path) && <Redirect to={route.path.slice(0, -1)} />}

  return (
    <React.Fragment>
      <RawIntlProvider value={intl}>
        <Helmet
          titleTemplate={`%s${pageTitles.appName}`}
          defaultTitle="CV: Justin Rankin"
          onChangeClientState={(newState, addedTags, removedTags) => {
            console.log(newState.title);
          }}>
          <html lang={LOCALE} />
          <title>{pageTitles.appName} (DEFAULT)</title>
          <meta name="description" content={messages.title} />
        </Helmet>
        <main>
          <CV />
        </main>
        <Global styles={cssGlobal} />
      </RawIntlProvider>
    </React.Fragment>
  );
}
