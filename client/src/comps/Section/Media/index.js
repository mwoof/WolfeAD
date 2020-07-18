import React from "react";

import "./indexStyle.css";

import Placeholder from "../../../media/images/Placeholder.png";

const Section = (props) => {
  return (
    <div className={`med-wrap ${props.noMinHit ? "" : "med-wrap-hit"}`}>
      <div className="med-shad-top "></div>
      <img
        onClick={(e) => (!props.link ? "" : (window.location = props.link))}
        key={props.image.toString()}
        src={props.image}
        className={`img-shadow ${props.specClass}`}
      />
    </div>
  );
};

export default Section;
