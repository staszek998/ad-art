// JS imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// SCSS imports
import "./App.scss";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Executions from "./pages/Executions/Executions";
import Projects from "./pages/Projects/Projects";
import Offer from "./pages/Offer/Offer";
import Contact from "./pages/Contact/Contact";

// Subpages
import House from "./pages/Executions/House/House";
import ExampleLivingRooms from "./pages/Projects/ExampleLivingRooms/ExampleLivingRooms";
import ExampleLivingRoom from "./pages/Projects/ExampleLivingRooms/ExampleLivingRoom/ExampleLivingRoom";

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

          {/* Executions subpages */}
          <Route exact path="/realizacje/dom" component={House} />

          {/* Projects subpages */}
          <Route exact path="/projekty/salony" component={ExampleLivingRooms} />
          <Route
            exact
            path="/projekty/salony/przykładowy-salon"
            component={ExampleLivingRoom}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  </div>
);

export default App;
