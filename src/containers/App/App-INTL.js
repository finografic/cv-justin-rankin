/** @jsx jsx */
import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// CONFIG
import { routes, pageTitles } from '_config';

// LAYOUT
import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

// STYLES
import { Global, jsx } from '@emotion/core';
import { cssGlobal } from 'styles/global';

// LOCALES
import dayjs from 'dayjs';
import 'dayjs/locale/en'; // load on demand
import 'dayjs/locale/es'; // set LOCALE globally!!
const LOCALE = 'es'; // load on demand
dayjs.locale(LOCALE);

// INTL FROM v1.9.0 CV
import { IntlProvider } from 'react-intl';

export default function App() {
  // TRAILING SLASH OPTIONS:
  // 1. <Redirect from="/:url*(/+)" to={route.path.slice(0, -1)} />
  // 2. <Redirect strict from={`${route.path}+'/'`} to={route.path} />
  // 3. {route.path !== '/' && /\/$/.test(route.path) && <Redirect to={route.path.slice(0, -1)} />}

  return (
    <React.Fragment>
      <Helmet
        titleTemplate={`%s${pageTitles.pageTitleSuffix}`}
        defaultTitle="Default/Fallback Title"
        onChangeClientState={(newState, addedTags, removedTags) => {
          console.log(newState.title);
        }}>
        <html lang={LOCALE} />
        <title>{pageTitles.appName} (DEFAULT)</title>
        <meta name="description" content="Finografic CMS Application" />
      </Helmet>
      <IntlProvider locale={state.locale} messages={messages[state.locale]} textComponent={React.Fragment}>
        <Router basename="/">
          <Switch>
            <Route exact path="/">
              <Redirect to="/cv" />
            </Route>
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </Router>
      </IntlProvider>
      <Global styles={cssGlobal} />
    </React.Fragment>
  );
}
