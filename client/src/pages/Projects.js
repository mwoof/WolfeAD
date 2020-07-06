import React, { Component } from "react";

import Filter from "../comps/Filter";
import Gallery from "../comps/Gallery";
import DotGrid from "../comps/grid";

class Home extends Component {
  render() {
    const tabs = [
      {
        title: "All Projects",
        link: "",
      },
      {
        title: "Commercial",
        link: "commercial",
      },
      {
        title: "Institutional",
        link: "institutional",
      },
      {
        title: "Residential",
        link: "residential",
      },
      {
        title: "On The Boards",
        link: "boards",
      },
    ];

    return (
      <div>
        <Filter tabs={tabs} />
        <Gallery />
        <div className="grid-wrapper flex-cent">
          <div className="spacing" style={{ height: "100%" }}>
            <DotGrid top="10%" left="-66px" />
            <DotGrid top="40%" right="-66px" />
            <DotGrid top="70%" left="-66px" />
            <DotGrid top="98%" right="-66px" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
