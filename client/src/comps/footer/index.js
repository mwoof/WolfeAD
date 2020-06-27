import React from "react";
import { NavLink, Route } from "react-router-dom";

import "./indexStyle.css";

function App() {
  const greeting = "Hello Function Component!";

  return (
    <div className="header-cont flex-cent nav-txt flex-out">
      <div className="">logo</div>
      <nav>
        <NavLink to="/" activeClassName="nav-txt-hlght">
          Home
        </NavLink>
      </nav>
      <div className="">nav</div>
    </div>
  );
}

export default App;
