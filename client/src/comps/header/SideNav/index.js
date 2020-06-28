import React from "react";
import { NavLink } from "react-router-dom";

import "./indexStyle.css";

function App() {
  return (
    <div className="sidNav-cont">
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
      </nav>
    </div>
  );
}

export default App;
