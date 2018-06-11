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
      <hr />
      <button className="menu-button">About</button>
      <hr />
      <a href="https://github.com/saltyjohn">
        <i className="fa fa-github text-white" />
      </a>
      <hr />
      <a href="https://www.linkedin.com/in/john-salzman/">
        <i className="fa fa-linkedin text-white" />
      </a>
      <hr />
      <a href="https://twitter.com/sazlman">
        <i className="fa fa-twitter text-white" />
      </a>
    </nav>
  );
};

MenuNav.propTypes = {
  showHide: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
};

export default MenuNav;
