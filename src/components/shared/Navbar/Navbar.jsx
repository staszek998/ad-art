import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <header class="Navbar">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <NavLink to="/">AD-art</NavLink>
                    <nav class="d-flex justify-content-center align-items-between">
                        <NavLink to="/o-nas">O NAS</NavLink>
                        <NavLink to="/realizacje">REALIZACJE</NavLink>
                        <NavLink to="/projekty">PROJEKTY</NavLink>
                        <NavLink to="/oferta">OFERTA</NavLink>
                        <NavLink to="/kontakt">KONTAKT</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

export default Navbar;
