import React from "react";
import { NavLink } from "react-router-dom";

import "./_Navbar.scss";

import adArtLogotype from "../../assets/images/ad-art-logotype.png";

const Navbar = () => {
  let navbar = React.createRef();
  let hamburger = React.createRef();

  return (
    <nav className="Navbar navbar navbar-expand-sm" ref={navbar}>
      <div className="container align-items-baseline">
        {/* Company name */}
        <NavLink className="brand-name" to="/">
          <img src={adArtLogotype} alt="Logotyp firmy AD-art" />
          AD-art
        </NavLink>

        {/* Dropdown toggle button */}
        <button
          ref={hamburger}
          className="hamburger hamburger--spin-r navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-controls="navbar-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={event => {
            hamburger.current.classList.toggle("is-active");
            navbar.current.classList.toggle("expanded");
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
};

export default Navbar;
