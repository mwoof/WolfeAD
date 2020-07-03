import React from "react";
import { NavLink } from "react-router-dom";

import "./indexStyle.css";
import firebase from "../../firebase";

import Logo from "../../media/svgs/Logo";

import SideNav from "./SideNav";

const Header = (props) => {
  return (
    <div
      className={`header-cont flex-cent nav-txt flex-out ${
        props.height ? "" : "header-cont-sml"
      }`}
    >
      <NavLink exact to="/" className="flex-cent">
        <Logo height="24px" />
      </NavLink>
      <nav className="flex-cent core-links desktop-only">
        <NavLink exact to="/" activeClassName="nav-txt-hlght">
          Home
        </NavLink>
        <NavLink to="/projects" activeClassName="nav-txt-hlght">
          Projects
        </NavLink>
        <NavLink to="/rendering" activeClassName="nav-txt-hlght">
          Rendering
        </NavLink>
        {!props.authed ? (
          ""
        ) : (
          <NavLink to="/admin" activeClassName="nav-txt-hlght">
            Admin
          </NavLink>
        )}
      </nav>
      <nav className="flex-cent desktop-only" style={{ marginRight: "-16px" }}>
        {!props.authed ? (
          <NavLink to="/login" activeClassName="nav-txt-hlght">
            Log in
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            onClick={() =>
              firebase
                .auth()
                .signOut()
                .catch(function (error) {
                  console.log(error);
                })
            }
            activeClassName="nav-txt-hlght"
          >
            Log out
          </NavLink>
        )}
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
          className={`header-svg ${!props.sideNav ? "active-svg" : ""}`}
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
        <svg
          className={`header-svg ${props.sideNav ? "active-svg" : ""}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
          />
        </svg>
      </div>
      <SideNav
        firebase={firebase}
        authed={props.authed}
        sideNav={props.sideNav}
      />
    </div>
  );
};

export default Header;
