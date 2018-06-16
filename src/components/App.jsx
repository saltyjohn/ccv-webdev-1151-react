import React, { Component } from 'react';

import Header from './Header';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // currentView: 'assignments_page',
      currentView: 'home_page',
      prevPage: '',
      nextPage: '',
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(e) {
    let targetID = e.target.id;
    if (e.currentTarget.id === 'name-logo-container' && (e.key === 'Enter' || e.type === 'click')) {
      targetID = 'home_page';
    }
    this.setState({
      currentView: targetID,
    });
  }

  render() {
    return (
      <div id="jrs-web">
        <Header handleView={this.changeView} />
        <ContentWrapper currentView={this.state.currentView} />
        <Footer previous={this.state.nextPage} next={this.state.prevPage} />
      </div>
    );
  }
}

export default App;
