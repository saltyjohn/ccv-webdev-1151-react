import React from 'react';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import About from './pages/About';
import Assignments from './pages/Assignments';
import './ContentWrapper.scss';

const pageDirectory = {
  home_page: <Home />,
  about_page: <About />,
  assignments_page: <Assignments />,
};

const ContentWrapper = props => {
  const currentPage = pageDirectory[props.currentView];
  return (
    <div className="content-wrapper">
      <main role="main">{currentPage}</main>
    </div>
  );
};

ContentWrapper.propTypes = {
  currentView: PropTypes.string.isRequired,
};

export default ContentWrapper;
