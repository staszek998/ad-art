// JS imports
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { Route, Link } from "react-router-dom";

// SCSS imports
import "./App.scss";
import Navbar from "./components/shared/Navbar/Navbar";

const App = () => (
    <div className="App">
        <Navbar />
        <Router>
            <div>This is being rendered by the react-router.</div>
        </Router>
    </div>
);

export default App;
