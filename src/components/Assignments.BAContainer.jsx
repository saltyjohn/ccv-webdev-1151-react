import React from 'react';
import PropTypes from 'prop-types';

const BAContainer = props => (
  <div className="ba-container">
    <h3>{props.title}</h3>
    <div>
      <a href={props.bSrc} alt={props.bAlt} target="_blank" rel="noopener noreferrer">
        Before
      </a>
      |
      <a href={props.aSrc} alt={props.aAlt} target="_blank" rel="noopener noreferrer">
        After
      </a>
    </div>
    <hr />
  </div>
);

BAContainer.propTypes = {
  title: PropTypes.string.isRequired,
  aAlt: PropTypes.string.isRequired,
  bAlt: PropTypes.string.isRequired,
  aSrc: PropTypes.string.isRequired,
  bSrc: PropTypes.string.isRequired,
};

export default BAContainer;
