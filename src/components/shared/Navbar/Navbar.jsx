import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <nav class="Navbar navbar navbar-expand-md">
        <div className="container">
            {/* Company name */}
            <NavLink to="/">AD-art</NavLink>

            {/* Dropdown toggle button */}
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-controls="navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            {/* Navbar links */}
            <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <NavLink to="/o-nas">O NAS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/o-nas">O NAS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/realizacje">REALIZACJE</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projekty">PROJEKTY</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/oferta">OFERTA</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/kontakt">KONTAKT</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
