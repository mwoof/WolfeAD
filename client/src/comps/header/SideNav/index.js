import React from "react";
import { NavLink } from "react-router-dom";

import "./indexStyle.css";
import Line from "../../Line";

function App() {
  return (
    <div className="sidNav-cont">
      <div className="sidNav-wrap">
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
          <Line width="32px" calsses="sidNav-div" />
          <NavLink to="/projects" activeClassName="nav-txt-hlght">
            Login
          </NavLink>
          <NavLink to="/rendering" className="nav-txt-hlght">
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default App;
