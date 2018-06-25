import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AssignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: 'hidden',
    };
  }

  componentWillMount() {
    // const that = this;
    setTimeout(() => {
      this.show();
    }, this.props.wait);
  }

  show() {
    // https://stackoverflow.com/questions/47382128/react-js-map-an-array-with-each-item-delayed?rq=1
    this.setState({ hidden: '' });
  }

  render() {
    return (
      <div className={`ba-container ${this.state.hidden}`}>
        {/* {console.log(props)} */}
        <h3>{this.props.title}</h3>
        <div>
          <a href={this.props.bSrc} alt={this.props.bAlt} target="_blank" rel="noopener noreferrer">
            Before
          </a>
          |
          <a href={this.props.aSrc} alt={this.props.aAlt} target="_blank" rel="noopener noreferrer">
            After
          </a>
        </div>
        <hr />
      </div>
    );
  }
}

AssignContainer.propTypes = {
  title: PropTypes.string.isRequired,
  aAlt: PropTypes.string.isRequired,
  bAlt: PropTypes.string.isRequired,
  aSrc: PropTypes.string.isRequired,
  bSrc: PropTypes.string.isRequired,
  wait: PropTypes.number.isRequired,
};

export default AssignContainer;
