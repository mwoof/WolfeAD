import React from "react";
import { NavLink } from "react-router-dom";

import "./indexStyle.css";

function App() {
  return (
    <div className="footer-cont nav-txt ">
      <nav className="flex-cent foot-links">
        <NavLink to="/projects/commercial" activeClassName="nav-txt">
          Commercial
        </NavLink>
        <NavLink to="/projects/institutional" activeClassName="nav-txt">
          Institutional
        </NavLink>
        <NavLink to="/projects/residential" activeClassName="nav-txt">
          Residential
        </NavLink>
        <NavLink to="/projects/ontheboards" activeClassName="nav-txt">
          On The Boards
        </NavLink>
      </nav>
      <div className="sub-txt foot-legal">
        © Wolfe Architecture & Design, LLC All rights reserved
      </div>

      <a
        className="nav-txt-hlght foot-email"
        href="mailto:mattwolfe@wolfead.net"
      >
        mattwolfe@wolfead.net
      </a>
      <div className="txt foot-number">314-960-0099</div>
    </div>
  );
}

export default App;
