import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NameLogo from './components/Header.NameLogo';
import MenuBurger from './components/Header.MenuBurger';
import Menu from './components/Header.Menu';
import './header.scss';

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
    switch (targetID) {
      case 'menu-button':
        this.setState({
          menuFirstLoad: false,
          menuOpen: !this.state.menuOpen,
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <header role="banner">
        <div className="menu-row">
          <NameLogo />
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
