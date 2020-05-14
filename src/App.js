import React from 'react';
import photo from 'assets/img/justin.png';
import { Counter } from './features/counter/Counter';
import 'scss/style.scss';

// i18n :: REACT-INTL
// import { ContextGlobal } from 'lib/state';
// import { IntlProvider, addLocaleData } from 'react-intl'; // addLocaleData REMOVED !!
// import { IntlProvider } from 'react-intl';
// import locale_en from 'react-intl/locale-data/en'; // LEGACY (DEPRECATED)
// import locale_es from 'react-intl/locale-data/es'; // LEGACY (DEPRECATED)
import messages_en from 'config/locales/en-US.json';
import messages_es from 'config/locales/es-ES.json';

// NEW, but UNECESSARY with Node v13 ??
// import '@formatjs/intl-displaynames/dist/locale-data/en';
// import '@formatjs/intl-displaynames/dist/locale-data/zs';
// require('@formatjs/intl-displaynames/dist/locale-data/en.json');
// require('@formatjs/intl-displaynames/dist/locale-data/es.json');

// TESTING:
import PropTypes from 'prop-types';
// import { IntlProvider } from 'react-intl';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { FormattedDate, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { useIntl } from 'react-intl';

const localeCurrent = 'en-US';

const messages = {
  'en-US': messages_en,
  'es-ES': messages_es,
};

console.log('MESSAGES-EN: ', messages_en);

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();
const intl = createIntl(
  {
    locale: localeCurrent,
    messages: { ...messages[localeCurrent] },
  },
  cache
);

import { fullBrowserVersion } from 'react-device-detect';

// addLocaleData([...locale_en, ...locale_es]);

console.log(navigator.languages);
//console.log(messages.es);
// Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);

// https://formatjs.io/docs/react-intl/upgrade-guide-3x#enhanced-formattedmessage--formatmessage-rich-text-formatting

// READ THIS !!!!!
// https://formatjs.io/docs/react-intl/upgrade-guide-3x

// COMMENT
// Containers
// const DefaultLayout = Loadable({ loader: () => import('./layouts/DefaultLayout'), loading });

/*
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const MyComponentWithHook = (props) => {
  const intl = useIntl();
  // do something
};
*/

function App(props) {
  // let { state } = React.useContext(ContextGlobal);
  console.log('APP PROPS: ', props);
  const testDate = new Date(1459913574887);
  let state = {
    locale: 'en',
  };
  console.log(intl);
  const { messages } = intl;
  return (
    <React.Fragment>
      {/* <IntlProvider locale={state.locale} messages={messages[state.locale]} textComponent={React.Fragment}> */}
      <RawIntlProvider value={intl}>
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
            <strong>localeCurrent:</strong> {localeCurrent}
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
        <h2>
          <FormattedMessage id="Profile.title" />
        </h2>
        <Counter />
      </RawIntlProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  localeCurrent: PropTypes.string.isRequired,
};

export default App;
