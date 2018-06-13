import React from 'react';
// import PropTypes from 'prop-types';

const Home = () => (
  <article>
    <h1>About: </h1>
    <p>Hello there!</p>
    <p className="multi-line-paragraph">
      My name is John Salzman, and {`I'm`} currently enrolled in {`CCV's`} Intro to Web Development
      Course 1151.
    </p>
    <p className="multi-line-paragraph">
      This page is made with ReactJS for the UI, Sassy CSS for styling, and bundled using Webpack.
    </p>
  </article>
);

// Home.propTypes = {};

export default Home;
