import React from "react";
import { NavLink } from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";

import "./indexStyle.css";
import Line from "../../Line";

import DotGrid from "../../grid";

const SideNav = (props) => {
  return (
    <div
      className={`sidNav-wrap flex-col-out ${
        props.sideNav ? "SideNav-act" : ""
      }`}
    >
      <nav className="flex-col-rit">
        <NavLink
          exact
          to="/"
          onClick={(e) => props.openSideNav()}
          activeClassName="nav-txt-hlght"
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          onClick={(e) => props.openSideNav()}
          activeClassName="nav-txt-hlght"
        >
          Projects
        </NavLink>
        <NavLink
          to="/rendering"
          onClick={(e) => props.openSideNav()}
          activeClassName="nav-txt-hlght"
        >
          Rendering
        </NavLink>
        {!props.authed ? (
          ""
        ) : (
          <NavLink
            to="/admin"
            onClick={(e) => props.openSideNav()}
            activeClassName="nav-txt-hlght"
          >
            Admin
          </NavLink>
        )}
        <Line width="32px" className="sidNav-div" />
        {!props.authed ? (
          <NavLink
            to="/login"
            onClick={(e) => props.openSideNav()}
            activeClassName="nav-txt-hlght"
          >
            Log in
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            onClick={() => {
              props.openSideNav();
              props.firebase
                .auth()
                .signOut()
                .catch(function (error) {
                  console.log(error);
                });
            }}
            activeClassName="nav-txt-hlght"
          >
            Log out
          </NavLink>
        )}
        <Link
          className="nav-txt-hlght"
          to="/#contact"
          onClick={(e) => props.openSideNav()}
        >
          Contact
        </Link>
      </nav>

      <div className="siNav-foot flex-col-rit" style={{ marginRight: "16px" }}>
        <div className="txt">314-960-0099</div>
        <a
          className="nav-txt-hlght"
          style={{ fontSize: "14px" }}
          href="mailto:mattwolfe@wolfead.net"
        >
          mattwolfe@wolfead.net
        </a>
      </div>

      <div className="grid-wrapper flex-cent">
        <div className="" style={{ height: "100%" }}>
          <DotGrid top="50%" right="-66px" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
