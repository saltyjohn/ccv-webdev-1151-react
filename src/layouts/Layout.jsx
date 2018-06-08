import React from 'react';

const Layout = () => (
  <div id="jrs-web">
    <header>
      <a id="header-primary-link" href="/WebDev" alt="home">
        {/* JSX requires closing tag for self-contained elements, <img> => <img /> */}
        <img src="/src/images/logo_max.svg" /> JRSweb
      </a>
      <nav id="header-nav">
        <button>
          <a href="/WebDev/routes/assignments.html">
            Assignments
        </a>
        </button>
        <button>
          <a href="/WebDev/routes/about.html">
            About
        </a>
        </button>
      </nav>
    </header>
  </div>
);

export default Layout;
