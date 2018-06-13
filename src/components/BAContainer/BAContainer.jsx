import React from 'react';
import PropTypes from 'prop-types';

const AssignContainer = props => (
  <div className="ba-container">
    <h3>{props.title}</h3>
    <div>
      <a className="before-link" href={props.bSrc} alt={props.bAlt} target="_blank">
        Before
      </a>
      |
      <a className="after-link" href={props.aSrc} alt={props.aAlt} target="_blank">
        After
      </a>
    </div>
    <hr />
  </div>
);

AssignContainer.propTypes = {
  title: PropTypes.string.isRequired,
  aAlt: PropTypes.string.isRequired,
  bAlt: PropTypes.string.isRequired,
  aSrc: PropTypes.string.isRequired,
  bSrc: PropTypes.string.isRequired,
};

export default AssignContainer;
