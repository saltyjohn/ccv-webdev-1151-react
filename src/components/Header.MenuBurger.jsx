import React from 'react';
import PropTypes from 'prop-types';

import './scss/header.menu-burger.scss';

const MenuBurger = props => {
  const currentIcon = props.open ? `fa fa-close` : `fa fa-navicon`;
  return (
    <button id="menu-burger" onClick={props.onClick}>
      <i id="menu-button" className={currentIcon} />
    </button>
  );
};

MenuBurger.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MenuBurger;
