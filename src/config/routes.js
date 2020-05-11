import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';

function routeEnter(nextState, replace, callback) {
  console.log('ENTERING...', nextState);
}

export const routes = [
  {
    path: '/',
    exact: true,
    component: DefaultLayout,
    name: 'Home',
  },
  {
    path: '/cv',
    component: React.lazy(() => import('views/CV')),
    name: 'CV: Justin Rankin',
    onEnter: { routeEnter },
  },
  // {
  //   path: "/",
  //   component: React.lazy(() => import('../views/CV')),
  //   name: 'CV: Justin Rankin',
  //   onEnter: {routeEnter}
  // },
];

export default routes;
