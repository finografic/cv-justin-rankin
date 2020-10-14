/** @jsx jsx */
import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useStore } from 'store';

// CONFIG
import { routes, pageTitles } from '_config';

// LAYOUT
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

// STYLES
import { Global, jsx } from '@emotion/core';
import { cssGlobal } from 'styles/global';

// ============================================== //

// INTL FROM v1.9.0 CV

// LOCALES - INTL
import { getCurrentLocale } from 'store';
import { IntlProvider, addLocaleData } from 'react-intl';
// import locale_en from 'react-intl/locale-data/en';
// import locale_es from 'react-intl/locale-data/es';
import messages_en from '_config/locales/en-US.json';
import messages_es from '_config/locales/es-ES.json';
const messages = {
  'en': messages_en,
  'es': messages_es,
};

// ============================================== //

export default function App() {
  const { state, dispatch } = useStore();
  const { LOCALE } = getCurrentLocale();

  // TRAILING SLASH OPTIONS:
  // 1. <Redirect from="/:url*(/+)" to={route.path.slice(0, -1)} />
  // 2. <Redirect strict from={`${route.path}+'/'`} to={route.path} />
  // 3. {route.path !== '/' && /\/$/.test(route.path) && <Redirect to={route.path.slice(0, -1)} />}

  return (
    <React.Fragment>
      <IntlProvider locale={LOCALE} messages={messages[state.locale]}>
        <Helmet
          titleTemplate={`%s${pageTitles.appName}`}
          defaultTitle="CV: Justin Rankin"
          onChangeClientState={(newState, addedTags, removedTags) => {
            console.log(newState.title);
          }}>
          <html lang={LOCALE} />
          <title>{pageTitles.appName} (DEFAULT)</title>
          <meta name="description" content="CV / Curriculum Vitae :: Justin Blair Rankin" />
        </Helmet>
        <Sidebar />
        <main>
          <Switch>
            {' '}
            cvbnm,mnb+YT
            {routes.map((route) => (
              <Route
                exact={route.exact}
                strict={route.strict}
                path={route.path}
                render={(props) => <route.component {...props} {...route} />}
                key={route.path}
              />
            ))}
            <Redirect from="/" to="/" />
          </Switch>
        </main>
        <Global styles={cssGlobal} />
      </IntlProvider>
    </React.Fragment>
  );
}
