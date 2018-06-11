import React, { Component } from 'react';

import NameLogo from './Header.NameLogo';
import MenuBurger from './Header.MenuBurger';
import './scss/header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    return (
      <header>
        <NameLogo />
        <MenuBurger open={this.state.menuOpen} onClick={e => this.handleClick(e)} />
      </header>
    );
  }
}

export default Header;
