import React from 'react';
import PropTypes from 'prop-types';

import './header.NameLogo.scss';
import logo from '../../../images/logo.png';

const NameLogo = props => (
  <div
    id="name-logo-container"
    role="button"
    tabIndex="0"
    onClick={props.handleView}
    onKeyPress={props.handleView}
  >
    <img id="header-logo" src={logo} alt="JRS web logo, face with headphones" />
    <h1 id="header-title">
      <span>JRS</span>
      <span>w</span>
      <span>e</span>
      <span>b</span>
    </h1>
  </div>
);

NameLogo.propTypes = {
  handleView: PropTypes.func.isRequired,
};

export default NameLogo;
