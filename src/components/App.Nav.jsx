import React from 'react';
import PropTypes from 'prop-types';

import './scss/app.nav.scss';

const MenuNav = props => {
  const navComponenetClasses = props.menuOpen ? 'show' : 'hide';
  return (
    <nav id="menu-nav" className={navComponenetClasses}>
      <button className="nav-button">Assignments</button>
      <button className="nav-button">Contact</button>
      <button className="nav-button">About</button>
    </nav>
  );
};

MenuNav.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};

export default MenuNav;
