import React from 'react';
import PropTypes from 'prop-types';

const PrevNextBtns = props => (
  <div id="next-prev">
    <button id="prev-btn" className={props.current > 1 ? 'active' : ''} onClick={props.handleClick}>
      <i className="fa fa-arrow-left" />
      <span>Prev</span>
    </button>

    <button id="assign-btn" onClick={props.handleModal}>
      {props.title}
    </button>

    <button
      id="next-btn"
      className={props.current < props.assignLimit ? 'active' : ''}
      onClick={props.handleClick}
    >
      <span>Next</span>
      <i className="fa fa-arrow-right" />
    </button>
  </div>
);

PrevNextBtns.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  assignLimit: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
};

export default PrevNextBtns;
