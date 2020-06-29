import React from "react";

import "./indexStyle.css";

import Line from "../Line";

const Section = (props) => {
  console.log(props.children);

  return (
    <section className="sect-cont sect-car-cont">
      <div className="sect-lbl sec-txt">
        <div style={{ position: "relative" }}>
          {`${props.lable}.`}
          <Line className="sect-lbl-lin" width="50vw" />
        </div>
      </div>
      <div className="sect-mdia">{props.media}</div>
      <div className="sect-txt">{props.text}</div>
      <div className="sect-act">{props.action}</div>
    </section>
  );
};

export default Section;
