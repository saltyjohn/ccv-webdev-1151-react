import React, { Component } from 'react';

import Header from './Header/Header';
import ContentWrapper from './ContentWrapper/ContentWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 'home',
    };
    this.changeView = this.changeView.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  changeView(e) {
    console.log(e.target);
    console.log(this);
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
