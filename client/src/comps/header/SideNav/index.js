import React from "react";
import { NavLink } from "react-router-dom";

import "./indexStyle.css";
import Line from "../../Line";

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
        <NavLink to="/" className="nav-txt-hlght">
          Contact
        </NavLink>
      </nav>

      <div className="siNav-foot flex-col-rit">
        <div className="txt">314-258-0118</div>
        <a className="nav-txt-hlght" href="mailto:matthew.wolfe5@gmail.com">
          matthew.wolfe5@gmail.com
        </a>
      </div>
    </div>
  );
};

export default SideNav;
