import React from "react";
import { Link } from "react-router-dom";

const Section = props => {
  return (
    <div className="flex-lft">
      <Link to={props.link} className="link-button flex-lft">
        <div className="title" style={{ whiteSpace: "nowrap" }}>
          {props.phrase}
        </div>
        <svg viewBox="0 0 24 24">
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
      </Link>
    </div>
  );
};

export default Section;
