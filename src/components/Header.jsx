import React, { Component } from 'react';

import logo from './images/logo.png'
import './scss/header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <header>
        <div id="name-logo-container">
          <img src={logo} />
          <h1 id="header-title">
            <span>JRS</span>
            <span>w</span>
            <span>e</span>
            <span>b</span>
          </h1>
        </div>
        <nav>
          <div></div>
          <div></div>
          <div></div>
        </nav>
      </header>
    )
  }
}


export default Header;
