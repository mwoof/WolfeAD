import React from "react";
import { Link } from "react-router-dom";

const Section = props => {
  return (
    <div className="flex-lft">
      <div
        onClick={props.action}
        className="link-button flex-lft"
        style={{ cursor: "pointer" }}
      >
        <div className="title" style={{ whiteSpace: "nowrap" }}>
          {props.phrase}
        </div>
        <svg viewBox="0 0 24 24">
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
      </div>
    </div>
  );
};

export default Section;
