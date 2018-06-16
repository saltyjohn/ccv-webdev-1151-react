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
        <button>
          <i className="fa fa-arrow-circle-left" />
          {this.props.previous}
        </button>
        <button>
          {this.props.next}
          <i className="fa fa-arrow-circle-right" />
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  previous: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default Footer;
