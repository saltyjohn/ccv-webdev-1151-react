import React from 'react';
import PropTypes from 'prop-types';

import Home from '../../pages/Home';
import './ContentWrapper.scss';

const pageDirectory = {
  home: <Home />,
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
