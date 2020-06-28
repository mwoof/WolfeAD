import React from "react";
import { NavLink } from "react-router-dom";

import "./indexStyle.css";

import Logo from "../../media/svgs/Logo";

const Header = props => {
  return (
    <div className="header-cont flex-cent nav-txt flex-out">
      <NavLink exact to="/" className="flex-cent">
        <Logo height="24px" />
      </NavLink>
      <nav className="flex-cent desktop-only">
        <NavLink exact to="/" activeClassName="nav-txt-hlght">
          Home
        </NavLink>
        <NavLink to="/projects" activeClassName="nav-txt-hlght">
          Projects
        </NavLink>
        <NavLink to="/rendering" activeClassName="nav-txt-hlght">
          Rendering
        </NavLink>
      </nav>
      <nav className="flex-cent desktop-only" style={{ marginRight: "-16px" }}>
        <NavLink to="/login" activeClassName="nav-txt-hlght">
          Login
        </NavLink>
        <NavLink
          className="nav-txt-hlght"
          to="/"
          activeClassName="nav-txt-hlght"
        >
          Contact
        </NavLink>
      </nav>
      <div className="moile-only menu-butn" onClick={() => props.openSideNav()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="2"
            d="M22 17H8.933M22 7H2"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
