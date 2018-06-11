import React, { Component } from 'react';

import Header from './Header';
import Menu from './App.Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const targetID = e.target.id;
    switch (targetID) {
      case 'menu-button':
        this.setState({
          menuOpen: !this.state.menuOpen,
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Header menuOpen={this.state.menuOpen} onClick={this.handleClick} />
        <Menu menuOpen={this.state.menuOpen} />
      </div>
    );
  }
}

export default App;
