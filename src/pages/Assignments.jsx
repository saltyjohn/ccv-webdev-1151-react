import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import BAContainer from '../components/BAContainer';
import PrevNextBtns from '../components/PrevNextBtns';
import assignments from '../assignments';

class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      currentAssign: Object.keys(assignments).length,
      completedAssignments: Object.keys(assignments).length,
      modalOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(e) {
    const targetID = e.currentTarget.id;
    let assignChange = 0;

    if (targetID === 'prev-btn' && this.state.currentAssign > 1) assignChange = -1;
    else if (targetID === 'next-btn' && this.state.currentAssign < this.state.completedAssignments)
      assignChange = 1;
    this.setState({
      currentAssign: this.state.currentAssign + assignChange,
    });
  }

  handleModal(e) {
    const modalOpen = !this.state.modalOpen;
    let newAssignment = this.state.currentAssign;
    if (e.target.id !== 'assign-btn') {
      newAssignment = Number(e.target.id.split('_')[1]);
    }
    this.setState({
      currentAssign: newAssignment,
      modalOpen,
    });
  }

  closeModal(e) {
    if (e.target.id === 'assign-modal') {
      this.setState({
        modalOpen: !this.state.modalOpen,
      });
    }
  }

  render() {
    const assignKey = `assignment_${this.state.currentAssign}`;
    const assignObj = assignments[assignKey];
    const currentBA = assignObj.before_after;
    return (
      <article>
        <h1>Assignments</h1>
        <PrevNextBtns
          handleModal={this.handleModal}
          handleClick={this.handleClick}
          title={assignObj.title}
          assignLimit={this.state.completedAssignments}
          current={this.state.currentAssign}
        />
        {Object.keys(currentBA).map(item => (
          <BAContainer
            title={currentBA[item].title}
            bSrc={currentBA[item].before.src}
            bAlt={currentBA[item].before.alt}
            aSrc={currentBA[item].after.src}
            aAlt={currentBA[item].after.alt}
            key={`${currentBA[item].title}${item}`}
            wait={250 + 150 * (item - 1)}
          />
        ))}
        {/* W3 school modal */}
        <div
          style={{ display: this.state.modalOpen ? 'block' : 'none' }}
          id="assign-modal"
          role="button"
          className="assign-modal"
          onClick={this.closeModal}
          // keyPress does not handle closing...
          onKeyPress={this.closeModal}
          tabIndex="0"
        >
          <div>
            <h2>Pick The Assignment {`You'd`} Like to See:</h2>
            {Object.keys(assignments).map(num => (
              <button
                id={`modal_${assignments[num].title}`}
                key={`modal_${num}`}
                onClick={this.handleModal}
              >
                {assignments[num].title}
              </button>
            ))}
          </div>
        </div>
      </article>
    );
  }
}

export default Assignments;
