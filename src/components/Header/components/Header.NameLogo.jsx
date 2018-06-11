import React from 'react';

import './header.NameLogo.scss';
import logo from '../../../images/logo.png';

const NameLogo = () => (
  <div id="name-logo-container">
    <img id="header-logo" src={logo} alt="JRS web logo, face with headphones" />
    <h1 id="header-title">
      <span>JRS</span>
      <span>w</span>
      <span>e</span>
      <span>b</span>
    </h1>
  </div>
);

export default NameLogo;
