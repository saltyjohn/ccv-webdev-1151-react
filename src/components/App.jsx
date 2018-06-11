import React, { Component } from 'react';

import Header from './Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // TODO: Switch these
      menuFirstLoad: false,
      menuOpen: true,
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
        <Header
          menuOpen={openMenu}
          onClick={this.handleClick}
          showHide={this.state.menuFirstLoad ? '' : openMenu}
        />
        {/* <Menu showHide={this.state.menuFirstLoad ? '' : openMenu} /> */}
        <article>
          <h1>Hello, world!</h1>
        </article>
      </div>
    );
  }
}

export default App;
