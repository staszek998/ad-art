// JS imports
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// SCSS imports
import "./App.scss";

const Home = () => <div>Home</div>;

const About = () => <div>About</div>;

const Topics = () => <div>Topics</div>;

const App = () => (
  <div className="App">
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  </div>
);

export default App;
