import React from "react";
import { NavLink } from "react-router-dom";

import "./_Home.scss";

const Home = () => (
  <main className="Home">
    {/* Heading / intro */}
    <h1>AD-art</h1>
    <h2>Projektujemy Twoją przestrzeń</h2>

    {/* Links */}
    <div className="links">
      <NavLink to="/relizacje">Zobacz nasze realizacje</NavLink>
      <NavLink to="/kontakt">Skontaktuj się z nami</NavLink>
    </div>
  </main>
);

export default Home;
