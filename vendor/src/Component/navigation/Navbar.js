import React, { Component } from "react";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { render } from "@testing-library/react";

//Component
import Logout from "../Logout/index";

//Store
import authStore from "../../stores/authStore";
import vendorStore from "../../stores/VendorStore";

const Navbar = () => {
  render();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Welcome
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cardform">
              Create a Card
            </a>
          </li>
          <li className="nav-item">
            <Logout />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
