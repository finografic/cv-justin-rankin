/** @jsx jsx */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';
import { NavItem } from './NavItem';
import { styles } from './Nav.styles';
import { useLocation } from 'react-router-dom';

// DOCS:
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md

export const Nav = ({ routes }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav css={styles}>
      <ol>
        {routes.map(
          (route) =>
            route.isNav && (
              <li key={route.title}>
                <NavItem {...route} currentPath={currentPath} />
              </li>
            ),
        )}
      </ol>
    </nav>
  );
};

Nav.propTypes = {
  routes: PropTypes.array,
};
