import React, { Component } from "react";

import Filter from "../comps/Filter";
import Gallery from "../comps/Gallery";

class Home extends Component {
  render() {
    const tabs = [
      {
        title: "All Projects",
        link: "all",
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
      </div>
    );
  }
}

export default Home;
