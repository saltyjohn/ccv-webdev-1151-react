import React from 'react';

const pStyle = {
  textAlign: 'center',
};

const Home = () => (
  <article>
    <h1>Home</h1>
    <h2>Welcome to my React Web Page!</h2>
    <p style={pStyle}>
      To navigate - use the buttons below, or at any time you can open the menu above and find where
      you need to go!
    </p>
  </article>
);

export default Home;
