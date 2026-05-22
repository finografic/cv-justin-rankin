import './styles/styles.css'; // layer order + DS reset (@layer reset)
import '@styled-system/styles.css'; // Panda CSS: base styles + tokens + utilities
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Root element #root was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
