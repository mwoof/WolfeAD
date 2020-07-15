import React from "react";

import "./indexStyle.css";

const Section = props => {
  return (
    <div className="banner-cont">
      <img src={props.image} className="banner-wrap" />
      <div className="spacing">
        <div className="banner-nav">{props.nav}</div>
        <div className="banner-txt">{props.text}</div>
      </div>
    </div>
  );
};

export default Section;
