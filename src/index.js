// POLYFILLS
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie11'; // NECESSARY ??
import 'react-app-polyfill/stable'; // NECESSARY ??

// import './lib/polyfills'; NEEDED ??
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
// import { ContextGlobalProvider } from 'lib/state';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
