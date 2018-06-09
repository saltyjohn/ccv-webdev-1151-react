import React from "react";
import ReactDOM from "react-dom";

import './index.scss'

// Webpack won't resolve implicitly imported .jsx files, must specify exact file name
// UPDATE: check webpack.config.js ==> resolve: ['*', '.js', '.jsx']
import App from './components/App'


ReactDOM.render(<App />, document.getElementById("root"));
