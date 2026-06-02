import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import PrintEditionApp from './editions/print/PrintEditionApp';

import './styles/theme.css'; // PostCSS entry: layer order + DS reset + Panda tokens

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Root element #root was not found.');
}

const edition = new URLSearchParams(window.location.search).get('edition');
const AppComponent = edition === 'print-compact' ? PrintEditionApp : App;

createRoot(rootElement).render(
  <StrictMode>
    <AppComponent />
  </StrictMode>,
);
