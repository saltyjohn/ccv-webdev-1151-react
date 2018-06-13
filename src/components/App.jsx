import React, { Component } from 'react';

import Header from './Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {}

  render() {
    return (
      <div id="jrs-web">
        <Header />
        <article>
          {/* Placeholder for conten */}
          <h1>Hello, world!</h1>
        </article>
      </div>
    );
  }
}

export default App;
