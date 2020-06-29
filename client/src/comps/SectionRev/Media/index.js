import React from "react";

import "./indexStyle.css";

const Section = (props) => {
  return (
    <div className="med-wrap-rev">
      <div className="med-shad-bot"></div>
      <img src={props.image} className="img-shadow" />
    </div>
  );
};

export default Section;
