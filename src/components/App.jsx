import React, { Component } from 'react';

import Header from './Header/Header';
import Menu from './Header/components/Header.Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuFirstLoad: true,
      menuOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const targetID = e.target.id;
    switch (targetID) {
      case 'menu-button':
        this.setState({
          menuFirstLoad: false,
          menuOpen: !this.state.menuOpen,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const openMenu = this.state.menuOpen;
    return (
      <div id="jrs-web">
        <Header menuOpen={openMenu} onClick={this.handleClick} />
        {/*
          showHide Prop ternary for quick fix of
          accidental 'hide' animation on first load
        */}
        <Menu showHide={this.state.menuFirstLoad ? '' : openMenu} />
      </div>
    );
  }
}

export default App;
