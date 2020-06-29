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
        <NavLink exact to="/" activeClassName="nav-txt-hlght">
          Home
        </NavLink>
        <NavLink to="/projects" activeClassName="nav-txt-hlght">
          Projects
        </NavLink>
        <NavLink to="/rendering" activeClassName="nav-txt-hlght">
          Rendering
        </NavLink>
        <Line width="32px" className="sidNav-div" />
        <NavLink to="/projects" activeClassName="nav-txt-hlght">
          Login
        </NavLink>
        <NavLink to="/rendering" className="nav-txt-hlght">
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
