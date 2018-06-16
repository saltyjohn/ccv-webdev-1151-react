import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../scss/Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <button
          id={this.props.previous}
          className="footer-btn"
          onClick={this.props.handleClick}
          data-move="-1"
        >
          <i className="fa fa-arrow-circle-left" />
          <span>{this.props.previous.split('_')[0]}</span>
        </button>
        <button id={this.props.next} className="footer-btn" onClick={this.props.handleClick}>
          <span>{this.props.next.split('_')[0]}</span>
          <i className="fa fa-arrow-circle-right" />
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  previous: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Footer;
