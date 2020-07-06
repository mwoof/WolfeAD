import React, { Component } from "react";

import Project from "../comps/Project";
import DotGrid from "../comps/grid";

class Home extends Component {
  render() {
    return (
      <div>
        <Project />
        <div className="grid-wrapper flex-cent">
          <div className="spacing" style={{ height: "100%" }}>
            <DotGrid top="75%" right="-66px" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
