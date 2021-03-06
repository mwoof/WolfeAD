import React from "react";
import { Link } from "react-router-dom";

const Section = props => {
  const name = props.data.name;
  return (
    <div className="car-sec-slide" style={{ overflow: "hidden" }}>
      <Link
        to={`/projects/project/${props.id}/${
          name && name.includes(" ") ? name.replace(/\s+/g, "-") : name
        }`}
      >
        <img src={props.data.cover} className="img-shadow" />
        <div className="txt-hlght carousel-lbl">{name}</div>
      </Link>
    </div>
  );
};

export default Section;
