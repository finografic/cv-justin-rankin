import React from 'react';
import baseLoadable from '@loadable/component';
import { Spinner } from 'components/Spinner';

// ICONS
// https://react-icons.github.io/react-icons/
// /react-icon/{used-libary}/index.ems.js
// /react-icon/{used-libary}/index.ems

// OPTIONAL PACKAGE TO PREPARE FOR ROUTER v6
// https://www.npmjs.com/package/react-router-config

const loadable = (func) => baseLoadable(func, { fallback: <Spinner /> });

// ROUTES
const CV = loadable(() => import('containers/CV'));

export const routes = [
  {
    path: '/',
    exact: true,
    strict: true,
    component: CV,
    title: 'CV / Curriculum Vitae :: Justin Blair Rankin',
    isNav: true,
    key: false,
  },
];
