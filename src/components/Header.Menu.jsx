import React from 'react';
import PropTypes from 'prop-types';

const MenuNav = props => {
  let menuClass;
  if (props.showHide === '') {
    menuClass = '';
  } else {
    menuClass = props.showHide ? 'show' : 'hide';
  }

  return (
    <nav id="app-menu" className={menuClass}>
      <div>
        <button id="home_page" className="menu-button" onClick={props.handleView}>
          Home
        </button>
        <button id="assignments_page" className="menu-button" onClick={props.handleView}>
          B&A
        </button>
        <button id="about_page" className="menu-button" onClick={props.handleView}>
          About
        </button>
      </div>
      <div>
        <a
          className="menu-button"
          href="https://github.com/saltyjohn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github text-white" />
        </a>
        <a
          className="menu-button"
          href="https://www.linkedin.com/in/john-salzman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin text-white" />
        </a>
        <a
          className="menu-button"
          href="https://twitter.com/sazlman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-twitter text-white" />
        </a>
      </div>
    </nav>
  );
};

MenuNav.propTypes = {
  showHide: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  handleView: PropTypes.func.isRequired,
};

export default MenuNav;
