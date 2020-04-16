import React from "react";
import "./navbar.scss";
import logo from "../../log.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="globetrot-travels" width="55px"></img>
        <span className="company">Globetrot Travels</span>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
          {/* <a href="\" className="nav-link">
            Home
          </a> */}
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
          {/* <a href="\" className="nav-link">
            About
          </a> */}
        </li>
        <li>
          <Link to="/tours" className="nav-link">
            Tours
          </Link>
          {/* <a href="\" className="nav-link">
            Tours
          </a> */}
        </li>
      </ul>
    </nav>
  );
}
