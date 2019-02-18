import React from "react";
import { Link } from "react-router-dom";

import "./_Home.scss";

const Home = () => (
  <main className="Home">
    {/* Heading / intro */}
    <h1 className="display-1">AD-art</h1>
    <h2>Projektujemy Twoją przestrzeń</h2>

    {/* Links */}
    <div className="links">
      <Link to="/realizacje" className="art-button">
        Zobacz nasze realizacje
      </Link>
      <Link to="/kontakt" className="art-button">
        Skontaktuj się z nami
      </Link>
    </div>
  </main>
);

export default Home;
