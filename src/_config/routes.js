import React from 'react';
import baseLoadable from '@loadable/component';
import { Spinner } from 'components/Spinner';

// ICONS
// https://react-icons.github.io/react-icons/
// /react-icon/{used-libary}/index.ems.js
// /react-icon/{used-libary}/index.ems
import { FiTriangle, FiGrid } from 'react-icons/fi';

// OPTIONAL PACKAGE TO PREPARE FOR ROUTER v6
// https://www.npmjs.com/package/react-router-config

const loadable = (func) => baseLoadable(func, { fallback: <Spinner /> });

// ROUTES
const HomePage = loadable(() => import('containers/HomePage'));
const Dashboard = loadable(() => import('containers/Dashboard'));
// const CV = loadable(() => import('containers/CV'));

export const routes = [
  {
    path: '/',
    exact: true,
    strict: true,
    component: HomePage,
    title: 'Homepage',
    subtitle: 'Homepage component',
    icon: <FiTriangle />,
    isNav: true,
    key: false,
  },
  {
    path: '/dashboard',
    exact: true,
    strict: false,
    component: Dashboard,
    title: 'Dashboard',
    subtitle: 'Dashboard component',
    icon: <FiGrid />,
    isNav: true,
    key: false,
  },
];
