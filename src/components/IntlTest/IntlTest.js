import React from 'react';
import photo from 'assets/img/justin.png';
import 'scss/style.scss';

// NEW, but UNECESSARY with Node v13 ??
// import '@formatjs/intl-displaynames/dist/locale-data/en';
// import '@formatjs/intl-displaynames/dist/locale-data/zs';
// require('@formatjs/intl-displaynames/dist/locale-data/en.json');
// require('@formatjs/intl-displaynames/dist/locale-data/es.json');

// TESTING:
import PropTypes from 'prop-types';
import { fullBrowserVersion } from 'react-device-detect';
import { IntlProvider } from 'react-intl';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { FormattedDate, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { getCurrentLocale } from 'store';

// NEW TOOLS!
import getIntl from 'utils/getIntl';

console.log(navigator.languages);

// https://formatjs.io/docs/react-intl/upgrade-guide-3x#enhanced-formattedmessage--formatmessage-rich-text-formatting

// READ THIS !!!!!
// https://formatjs.io/docs/react-intl/upgrade-guide-3x

function IntlTest(props) {
  const { LOCALE } = getCurrentLocale();
  // let { state } = React.useContext(ContextGlobal);
  console.log('APP PROPS: ', props);
  const testDate = new Date(1459913574887);
  const { intl, messages } = getIntl(LOCALE);

  console.log('intl =======> ', intl);
  console.log('MESSAGES =======> ', messages);

  return (
    <React.Fragment>
      {/*<IntlProvider locale={LOCALE} messages={messages[LOCALE]} textComponent={React.Fragment}>*/}
      {/*<RawIntlProvider value={intl}>*/}
      <header className="cv-header">
        <div className="col-photo">
          <img src={photo} alt="Jusitn Rankin" className="me" />
        </div>
        <div className="col-title">
          <h1>Justin Rankin</h1>
          <h2>Full-stack developer</h2>
        </div>
      </header>
      <ul>
        <li>
          <strong>navigator.language:</strong> {navigator.language}
        </li>
        <li>
          <strong>localeCurrent:</strong> {LOCALE}
        </li>
        <li>
          <strong>fullBrowserVersion:</strong> {fullBrowserVersion}
        </li>
        <li>
          <strong>example localized date:</strong>{' '}
          <FormattedDate value={testDate} year="numeric" month="long" day="numeric" weekday="long" />
        </li>
        <li>
          <strong>process.env.GITHUB_GIST:</strong> {process.env.GITHUB_GIST}
        </li>
        <li>
          <strong>process.env.REACT_APP_GITHUB_GIST:</strong> {process.env.REACT_APP_GITHUB_GIST}
        </li>
      </ul>
      {/*
        <FormattedMessage id="Sidebar.nav.list">
          {(listItems) => {
            console.log('LIST ITEMS:', listItems);
          }}
        </FormattedMessage>
        */}
      {/*
        <FormattedMessage id="Sidebar.nav.list">
          {(listItems) => {
            console.log('LIST ITEMS:', listItems);
            console.log('LIST ITEMS LENGTH:', listItems.length);
          }}
        </FormattedMessage>
        */}
      <h2>
        <FormattedMessage id={messages.app.title} />
      </h2>

      {/*<FormattedMessage id="Profile">{(profile) => <strong>{profile}</strong>}</FormattedMessage>*/}
      {/*</RawIntlProvider>*/}
      {/*</IntlProvider>*/}
    </React.Fragment>
  );
}

IntlTest.propTypes = {
  localeCurrent: PropTypes.string.isRequired,
};

export default IntlTest;
