import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="nav__left__container">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
      </div>
      <div className="nav__center__container">1-Space</div>
      <div className="nav__right__container">
        <span>Services</span>
        <span>Spaces</span>
        <span>Events</span>
      </div>
    </div>
  );
};

export default Navbar;
