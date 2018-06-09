import React from 'react';
import './scss/layout.scss'

const Layout = () => (
  <div id="jrs-web">
    <header>
      <div id="name-logo-container">
        {/*
          JSX requires closing tag for self-contained elements, <img> => <img />,
          images loaded through webpack-dev-server must be root-relative because
          assets have not been loaded in development:
          file-loader: https://survivejs.com/webpack/loading/images/#setting-up-file-loader-
        */}
        <img src="/src/layout/images/logo_max_optimized_svg.svg" />
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
