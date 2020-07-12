import React from "react";
import { NavLink } from "react-router-dom";

const Section = props => {
  return (
    <div style={{ marginLeft: "12px" }}>
      <div className="flex-rit">
        <p className="title">{props.stat}</p>
        <p className="title sub-title">{props.unit}</p>
      </div>

      <p className="sub-txt" style={{ margin: 0 }}>
        {props.lable}
      </p>
      <div
        style={{
          width: "100px",
          marginTop: "8px",
          borderBottom: "2px solid rgba(255, 255, 255, 0.5)"
        }}
      />
    </div>
  );
};

export default Section;
