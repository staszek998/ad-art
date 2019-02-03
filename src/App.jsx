// JS imports
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";

// SCSS imports
import "./App.scss";

const App = () => (
  <div className="App">
    <Router>
      <div>This is being rendered by the react-router.</div>
    </Router>
  </div>
);

export default App;
