import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/shared/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/shared/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../../assets/shared/icon-close.svg";
import Wrapper from "./Navbar.styled";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { pathname } = useLocation();

  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <Wrapper className="">
      <div>
        <img src={logo} alt="logo" className="" />
      </div>

      <button
        className=""
        aria-controls="primary-navigation"
        aria-expanded={showNavbar}
        onClick={toggleNavbar}
      >
        <span className="sr-only">Menu</span>
        {showNavbar ? <CloseIcon /> : <MenuIcon />}
      </button>
      <nav className="nav">
        <div className="nav-bg"></div>
        <ul id="primary-navigation">
          <li className={pathname === "/" ? "active" : null}>
            <Link to="/">
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li className={pathname === "/destination" ? "active" : null}>
            <Link to="/destination?query=moon">
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li className={pathname === "/crew" ? "active" : null}>
            <Link to="/crew?query=commander">
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>
          <li className={pathname === "/technology" ? "active" : null}>
            <Link to="/technology">
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
