import React from "react";
import "./navbar.scss";
import logo from "../../log.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="globetrot-travels" width="55px"></img>
        <span className="company">Globetrot Travels</span>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/tours" className="nav-link" activeClassName="active">
            Tours
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
