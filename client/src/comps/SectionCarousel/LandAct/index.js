import React from "react";
import { NavLink } from "react-router-dom";

import Highlight from "./Hilight";

const Section = props => {
  return (
    <div className="flex-lft">
      <Highlight stat="Stat" lable="Page Views" />
      <Highlight stat="Stat" lable="Page Views" />
      <Highlight stat="Stat" lable="Page Views" />
    </div>
  );
};

export default Section;
