import React from "react";

import Line from "../../Line";
import Highlight from "./Highlight";

const Section = (props) => {
  return (
    <div>
      <h1>Architecture & Design</h1>
      <p>
        Wolfe Architecture & Design is founded on analysis and exploration. We
        relish the challenges inherent across a wide range of work, engaging our
        expertise and agility to deliver lasting, meaningful design that brings
        value and joy to clients and users.
        <br />
        <br />
        Founded in 2012, the practice operates worldwide with projects in
        Beijing, Normandy, Yunnan, and major cites across the United States. As
        an international practice Wolfe A&D covers architecture, planning and
        industrial design across all major sectors.
      </p>
      <div className="Highlight-cont">
        <Highlight number="40" unit="y" text="Experience" />
        <Highlight number="60" unit="+" text="Projects" />
        <Highlight number="40" unit="y" text="Years of experience" />
      </div>
    </div>
  );
};

export default Section;
