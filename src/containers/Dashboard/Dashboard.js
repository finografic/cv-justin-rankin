import React from 'react';
import { useStore } from 'store';
import { Col, Row } from 'react-styled-flexboxgrid';
import { StoreConsumer } from 'store';
/// //////////////////////////////////////
import messages_en from '_config/locales/en-US.json';
import messages_es from '_config/locales/es-ES.json';
// import { fullBrowserVersion } from 'react-device-detect';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { FormattedDate, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
// import { useIntl } from 'react-intl';
import photo from 'assets/img/justin.png';

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
  cache,
);
const testDate = new Date(1459913574887);
/// //////////////////////////////////////

const Dashboard = (props) => {
  const { state, dispatch } = useStore();
  console.log('STATE >>> ', state);

  return (
    <section>
      <Row>
        <Col xs={6}>
          <h3>useStore().state</h3>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </Col>
        <Col xs={6}>
          <h3>StoreConsumer.state</h3>
          <pre>
            <StoreConsumer>{({ state }) => JSON.stringify(state, null, 2)}</StoreConsumer>
          </pre>
        </Col>
      </Row>
    </section>
  );
};

export default Dashboard;
