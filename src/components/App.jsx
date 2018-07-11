import React, { Component } from 'react';

import Header from './Header';
import ContentWrapper from '../components/ContentWrapper';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 'home_page',
      pageRef: ['home_page', 'assignments_page', 'about_page'],
      prevPage: 'about_page',
      nextPage: 'assignments_page',
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView(e) {
    const cTargetClass = e.currentTarget.className;
    let prevPage = '';
    let nextPage = '';
    let targetID = e.target.id;
    // Handle Menu button with unique id
    if (e.currentTarget.id === 'name-logo-container' && (e.key === 'Enter' || e.type === 'click')) {
      targetID = 'home_page';
    } else if (cTargetClass === 'footer-btn') {
      // handle footer buttons, and update page titles
      targetID = e.currentTarget.id;
    }
    const ref = this.state.pageRef;
    let nextNum = ref.indexOf(targetID) + 1;
    let prevNum = ref.indexOf(targetID) - 1;

    if (prevNum < 0) {
      prevNum = ref.length - 1;
    } else if (nextNum > ref.length - 1) {
      nextNum = 0;
    }

    prevPage = ref[prevNum];
    nextPage = ref[nextNum];

    this.setState({
      currentView: targetID,
      prevPage,
      nextPage,
    });
  }

  render() {
    const { prevPage, nextPage, currentView } = this.state;
    const { changeView } = this;
    return (
      <div id="jrs-web">
        <Header handleView={changeView} />
        <ContentWrapper currentView={currentView} />
        <Footer previous={prevPage} next={nextPage} handleClick={changeView} />
      </div>
    );
  }
}

export default App;
