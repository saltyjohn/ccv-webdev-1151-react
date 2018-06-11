import React from 'react';
import PropTypes from 'prop-types';

import './header.menu.scss';

const MenuNav = props => {
  let menuClass;
  if (props.showHide === '') {
    menuClass = '';
  } else {
    menuClass = props.showHide ? 'show dropped' : 'hide center';
  }

  return (
    <nav id="app-menu" className={menuClass}>
      <button className="menu-button">Assignments</button>
      {/* <button className="menu-button">Contact</button> */}
      <button className="menu-button">About</button>
    </nav>
  );
};

MenuNav.propTypes = {
  showHide: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
};

export default MenuNav;
