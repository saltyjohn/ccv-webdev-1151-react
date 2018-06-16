import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NameLogo from './Header.NameLogo';
import MenuBurger from './Header.MenuBurger';
import Menu from './Header.Menu';
import '../scss/Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuFirstLoad: true,
      menuOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const targetID = e.target.id;
    if (targetID === 'menu-burger-icon') {
      this.setState({
        menuFirstLoad: false,
        menuOpen: !this.state.menuOpen,
      });
    }
  }

  render() {
    return (
      <header role="banner">
        <div className="menu-row">
          <NameLogo handleView={this.props.handleView} />
          <MenuBurger open={this.state.menuOpen} onClick={this.handleClick} />
        </div>
        <Menu
          handleView={this.props.handleView}
          showHide={this.state.menuFirstLoad ? '' : this.state.menuOpen}
        />
      </header>
    );
  }
}

Header.propTypes = {
  handleView: PropTypes.func.isRequired,
};

export default Header;
