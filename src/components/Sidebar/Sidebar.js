/** @jsx jsx */
import React, { useEffect } from 'react';
import { jsx } from '@emotion/core';
import { Nav } from 'components/Nav';
import { useLocation } from 'react-router-dom';
import { routes } from '_config';
import { layout } from 'styles';
import { styles } from './Sidebar.styles';

const Sidebar = () => {
  const location = useLocation();
  useEffect(() => {
    // const currentPath = location.pathname;
  }, [location]);
  return (
    <aside className="sidebar" css={styles}>
      <div className="sidebar-content-wrapper">
        <Nav routes={routes} />
      </div>
    </aside>
  );
};

export default Sidebar;
