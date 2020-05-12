import React from 'react';
import photo from 'assets/img/justin.png';
import { Counter } from './features/counter/Counter';
import 'scss/style.scss';

// i18n :: REACT-INTL
// import { ContextGlobal } from 'lib/state';
// import { IntlProvider, addLocaleData } from 'react-intl';
import { IntlProvider } from 'react-intl';
// import locale_en from 'react-intl/locale-data/en';
// import locale_es from 'react-intl/locale-data/es';
// import locale_en from 'config/locale-data/en';
// import locale_es from 'config/locale-data/es';
import messages_en from 'config/locales/en.json';
import messages_es from 'config/locales/es.json';

// TESTING:
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const url_1 = 'https://gist.github.com/finografic/251d6d610f0c19ba6b83029c4d620826';
const url_2 =
  'https://gist.githubusercontent.com/finografic/251d6d610f0c19ba6b83029c4d620826/raw/1612c51ea4129d4866c690145a9d9dd3aa48039e/cv-content_en.json';

fetch(url_1).then((data) => {
  console.log('>>> GIST FETCH >>>');
  console.log(data);
});

// addLocaleData([...locale_en, ...locale_es]);
const messages = {
  'en': messages_en,
  'es': messages_es,
};

//COMMENT

// Containers
// const DefaultLayout = Loadable({ loader: () => import('./layouts/DefaultLayout'), loading });

function App(props) {
  // let { state } = React.useContext(ContextGlobal);
  let state = {
    locale: 'en',
  };
  return (
    <React.Fragment>
      {/* <IntlProvider locale={state.locale} messages={messages[state.locale]} textComponent={React.Fragment}> */}
      <IntlProvider locale="en">
        <header className="cv-header">
          <div className="col-photo">
            <img src={photo} alt="Jusitn Rankin" className="me" />
          </div>
          <div className="col-title">
            <h1>Justin Rankin</h1>
            <h2>Full-stack developer</h2>
          </div>
        </header>
        <Counter />
      </IntlProvider>
    </React.Fragment>
  );
}

export default App;
