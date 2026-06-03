import { ViewNav } from 'components/view-nav/ViewNav';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { parseCvViewParam } from 'types/cv-view.types';

import App from './App';
import AppPrint from './AppPrint';

import './styles/theme.css';

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Root element #root was not found.');
}

const view = parseCvViewParam(globalThis.location.search);

createRoot(rootElement).render(
  <StrictMode>
    <ViewNav view={view} />
    {view === 'condensed' ? <AppPrint /> : <App />}
  </StrictMode>,
);
