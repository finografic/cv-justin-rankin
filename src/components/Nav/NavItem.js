import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavItem = ({ exact, ...props }) => (
  <NavLink
    exact={exact}
    to={props.path}
    innerRef={props.ref}
    className="button"
    activeClassName="selected"
    ariaLabel={props.title}
    currentPath={props.currentPath}
    onClick={() => {}}>
    {props.icon} {props.title}
  </NavLink>
);

NavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default memo(NavItem);
