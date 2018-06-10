import React from 'react';

import logo from '../images/logo.png'
import '../scss/header.scss';

/*
  JSX requires closing tag for self-contained elements, <img> => <img />,
  images loaded through webpack-dev-server must be root-relative because
  assets are not yet loaded in production-mode:
  file-loader: https://survivejs.com/webpack/loading/images/#setting-up-file-loader
*/

const Layout = () => (
  <div id="jrs-web">
    <header>
      <div id="name-logo-container">
        <img src={logo} />
        <h1 id="header-title">
          <span>
            JRS
          </span>
          <span>
            web
          </span>
        </h1>
      </div>
      <nav>
      </nav>
    </header>
  </div>
);

export default Layout;
