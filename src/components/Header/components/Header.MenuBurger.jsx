import React from 'react';
import PropTypes from 'prop-types';

import './header.MenuBurger.scss';

const MenuBurger = props => {
  const componentClasses = props.open ? `fa fa-close text-orange` : `fa fa-navicon text-white`;
  return (
    <button id="menu-burger" onClick={props.onClick}>
      <i id="menu-button" className={componentClasses} />
    </button>
  );
};

MenuBurger.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MenuBurger;
