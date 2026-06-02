import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import AppPrint from './AppPrint';

import './styles/theme.css';

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Root element #root was not found.');
}

const edition = new URLSearchParams(window.location.search).get('edition');
const AppComponent = edition === 'print' ? AppPrint : App;

createRoot(rootElement).render(
  <StrictMode>
    <AppComponent />
  </StrictMode>,
);
