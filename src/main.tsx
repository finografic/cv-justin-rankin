import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './styles/theme.css'; // PostCSS entry: layer order + DS reset + Panda tokens

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Root element #root was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
