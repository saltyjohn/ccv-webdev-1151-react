import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import BAContainer from '../components/BAContainer/BAContainer';
import assignments from '../assignments';

class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      currentAssign: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const targetID = e.currentTarget.id;
    let assignChange = 0;
    if (targetID === 'prev-btn' && this.state.currentAssign > 1) {
      assignChange = -1;
    } else if (targetID === 'next-btn' && this.state.currentAssign < 14) {
      assignChange = 1;
    }
    this.setState({
      currentAssign: this.state.currentAssign + assignChange,
    });
  }

  render() {
    const assignKey = `assignment_${this.state.currentAssign}`;
    const assignObj = assignments[assignKey];
    const currentBA = assignObj.before_after;
    return (
      <article>
        <h1>Assignments</h1>

        <div id="next-prev">
          <button
            id="prev-btn"
            className={this.state.currentAssign > 1 ? 'active' : ''}
            onClick={this.handleClick}
          >
            <i className="fa fa-arrow-left" />
            <span>Prev</span>
          </button>

          <h2>{assignObj.title}</h2>

          <button
            id="next-btn"
            className={this.state.currentAssign < 14 ? 'active' : ''}
            onClick={this.handleClick}
          >
            <span>Next</span>
            <i className="fa fa-arrow-right" />
          </button>
        </div>

        {Object.keys(currentBA).map(item => (
          <BAContainer
            title={currentBA[item].title}
            bSrc={currentBA[item].before.src}
            bAlt={currentBA[item].before.alt}
            aSrc={currentBA[item].after.src}
            aAlt={currentBA[item].after.alt}
            key={`${currentBA[item].title}${item}`}
          />
        ))}
      </article>
    );
  }
}

export default Assignments;
