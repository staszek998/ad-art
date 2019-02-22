import React from "react";
import { NavLink } from "react-router-dom";

import "./_Navbar.scss";

const Navbar = () => (
  <nav className="Navbar navbar navbar-expand-sm">
    <div className="container align-items-baseline">
      {/* Company name */}
      <NavLink className="brand-name" to="/">
        AD-art
      </NavLink>

      {/* Dropdown toggle button */}
      <button
        className="hamburger hamburger--spin-r navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-collapse"
        aria-controls="navbar-collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={event => {
          event.currentTarget.classList.toggle("is-active");
        }}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>

      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="art-link-hover" to="/o-nas">
              O NAS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="art-link-hover" to="/realizacje">
              REALIZACJE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="art-link-hover" to="/projekty">
              PROJEKTY
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="art-link-hover" to="/oferta">
              OFERTA
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="art-link-hover" to="/kontakt">
              KONTAKT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
