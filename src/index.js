import React from "react";
import ReactDOM from "react-dom";

// Webpack won't resolve implicitly imported .jsx files, must specify exact file name
// UPDATE: check webpack.config.js ==> resolve: ['*', '.js', '.jsx']
import Layout from './layout/Layout'


ReactDOM.render(<Layout />, document.getElementById("root"));
