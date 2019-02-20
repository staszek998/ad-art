// JS imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// SCSS imports
import "./App.scss";

// Components
// Shared
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Executions from "./pages/Executions/Executions";
import Projects from "./pages/Projects/Projects";
import Offer from "./pages/Offer/Offer";
import Contact from "./pages/Contact/Contact";
import Execution from "./components/Execution/Execution";

// Temporary example execution
import exampleExecution from "./db/example-execution";

const App = () => (
  <div className="App">
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/o-nas" component={About} />
          <Route exact path="/realizacje" component={Executions} />
          <Route exact path="/projekty" component={Projects} />
          <Route path="/oferta" component={Offer} />
          <Route path="/kontakt" component={Contact} />

          <Route
            exact
            path="/realizacje/dom"
            render={props => (
              <Execution
                {...props}
                title={exampleExecution.title}
                photos={exampleExecution.photos}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  </div>
);

export default App;
