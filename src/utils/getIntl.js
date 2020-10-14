// i18n :: REACT-INTL
import PropTypes from 'prop-types';
import messages_en from '_config/locales/v2/en-US.json';
import messages_es from '_config/locales/v2/es-ES.json';
import { createIntl, createIntlCache } from 'react-intl';

// NEW, but UNECESSARY with Node v13 ??
// import '@formatjs/intl-displaynames/dist/locale-data/en';
// import '@formatjs/intl-displaynames/dist/locale-data/zs';
// require('@formatjs/intl-displaynames/dist/locale-data/en.json');
// require('@formatjs/intl-displaynames/dist/locale-data/es.json');

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

const getIntl = (localeCurrent) => {
  // ============================================== //
  const messages = {
    'en': messages_en,
    'es': messages_es,
  };

  const intl = createIntl(
    {
      locale: localeCurrent,
      messages: { ...messages[localeCurrent] },
    },
    cache,
  );

  // ============================================== //

  return { intl, messages: intl.messages };
};

getIntl.propTypes = {
  localeCurrent: PropTypes.string.isRequired,
};

export default getIntl;
