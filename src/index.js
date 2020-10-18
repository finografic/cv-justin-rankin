// POLYFILLS
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie11'; // NECESSARY ??
import 'react-app-polyfill/stable'; // NECESSARY ??

import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorker from 'serviceWorker';

// ============================================== //

// STORE
// https://react.christmas/2019/7
import { StoreProvider } from 'store';
import createStore from 'store/createStore';
import initialState from 'store/store.schema';
// import createStore from 'store/createStore';
const store = createStore({ /* reducer, */ initialState });

// ============================================== //

// NEEDED ??
import { fullBrowserVersion } from 'react-device-detect';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  // eslint-disable-next-line global-require
  const App = require('./containers/App').default;
  ReactDOM.render(
    <StoreProvider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>,
    MOUNT_NODE,
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./containers/App', render);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

serviceWorker.unregister();

/*
serviceWorker.register({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', (event) => {
        if (event.target.state === 'activated') {
          window.location.reload();
        }
      });
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  },
});
*/
