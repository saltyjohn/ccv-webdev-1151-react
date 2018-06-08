import React from 'react';

const Layout = () => (
  <div id="jrs-web">
    <header>
      <div id="home-link">
        {/*
          JSX requires closing tag for self-contained elements, <img> => <img />,
          images loaded through webpack-dev-server must be root-relative because
          assets have not been loaded in development:
          file-loader: https://survivejs.com/webpack/loading/images/#setting-up-file-loader-
        */}
        <img src="/src/layout/images/logo_max_optimized_svg.svg" />
        <h1>
          JRSweb
        </h1>
      </div>
      <nav id="header-nav">
        <a className="header-link" href="#">
          Assignments
        </a>
        <a href="#">
          About
        </a>
      </nav>
    </header>
  </div>
);

export default Layout;
