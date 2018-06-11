import React from 'react';
import PropTypes from 'prop-types';

import NameLogo from './components/Header.NameLogo';
import MenuBurger from './components/Header.MenuBurger';
import './header.scss';

const Header = props => (
  <header>
    <NameLogo />
    <MenuBurger open={props.menuOpen} onClick={props.onClick} />
  </header>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

export default Header;
