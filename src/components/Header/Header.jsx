import React from 'react';
import PropTypes from 'prop-types';

import NameLogo from './components/Header.NameLogo';
import MenuBurger from './components/Header.MenuBurger';
import Menu from './components/Header.Menu';
import './header.scss';

const Header = props => (
  <header>
    <div className="row">
      <NameLogo />
      <MenuBurger open={props.menuOpen} onClick={props.onClick} />
    </div>
    <Menu showHide={props.showHide} />
  </header>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  showHide: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
};

export default Header;
