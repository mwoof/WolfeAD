import React from "react";

import "./indexStyle.css";

import Placeholder from "../../../media/images/Placeholder.png";

const Section = (props) => {
  return (
    <div className="med-wrap">
      <div className="med-shad-top "></div>
      <img src={props.image} className="img-shadow" />
    </div>
  );
};

export default Section;
