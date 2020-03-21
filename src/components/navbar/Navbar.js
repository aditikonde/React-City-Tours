import React from "react";
import "./navbar.scss";
import logo from "../../log.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Lets Fly Travels" width="55px"></img>
        <span className="company">Globetrot Travels</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="\" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="\" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="\" className="nav-link active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
