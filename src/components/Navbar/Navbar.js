import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light nav-style">
      <div class="container">
        <Link class="logo-style" to="/">
          The Open University
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <NavLink activeStyle={activeStyle} to="/home">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeStyle={activeStyle} to="/about">
                About us
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeStyle={activeStyle} to="/services">
                Services
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeStyle={activeStyle} to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
