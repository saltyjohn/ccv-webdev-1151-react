import React, { Component } from 'react';

import Header from './Header/Header';
import ContentWrapper from './ContentWrapper/ContentWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 'home_page',
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(e) {
    let targetID = e.target.id;
    if (
      // handles nameLogo.jsx container id return to home screen on Enter or click
      e.currentTarget.id === 'name-logo-container' &&
      (e.key === 'Enter' || e.type === 'click')
    ) {
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
      </div>
    );
  }
}

export default App;
