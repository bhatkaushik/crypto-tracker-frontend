/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cryptoLogo from "../../assets/Group 33648.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        <img
          src={cryptoLogo}
          width={28}
          height={30}
          className="d-inline-block align-top"
          alt="logo"
        />
        {"  "} Crypto Tracker
      </a>
      <div className="navitemWrapper d-flex">

      <div class="nav-item active search nav-push-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
          >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      <div class="nav-item active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
          >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
        </svg>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
