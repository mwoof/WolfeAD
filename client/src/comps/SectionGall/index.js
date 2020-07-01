import React from "react";

import "./indexStyle.css";

import Line from "../Line";
import Gallery from "../Gallery";

const Section = (props) => {
  return (
    <section className="sect-cont sect-gal-cont">
      <div className="sect-lbl sec-txt">
        <div style={{ position: "relative" }}>
          {`${props.lable}.`}
          <Line className="sect-lbl-lin" width="50vw" />
        </div>
      </div>
      <Gallery className="sect-gal" />
    </section>
  );
};

export default Section;
