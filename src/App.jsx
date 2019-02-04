// JS imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// SCSS imports
import "./App.scss";

// Components
// Shared
import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";
// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Executions from "./pages/Executions/Executions";
import Projects from "./pages/Projects/Projects";
import Offer from "./pages/Offer/Offer";
import Contact from "./pages/Contact/Contact";

const App = () => (
    <div className="App">
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/o-nas" component={About} />
                    <Route path="/realizacje" component={Executions} />
                    <Route path="/projekty" component={Projects} />
                    <Route path="/oferta" component={Offer} />
                    <Route path="/kontakt" component={Contact} />
                </Switch>
                <Footer />
            </div>
        </Router>
    </div>
);

export default App;
