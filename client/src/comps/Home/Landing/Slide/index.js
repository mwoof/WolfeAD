import React from "react";
import { Link } from "react-router-dom";

import "./indexStyle.css";

const Drop = props => {
  let strLngth = 20;

  return (
    <div className="slide-wrap flex-cent flex-col">
      <img className="slide-img" src={props.image} alt="WolfeAD Landing Page" />
      <Link
        to={`/projects/${props.link}`}
        className="slide-link flex-cent flex-col"
      >
        <h1>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</h1>
        <button className="but-line" style={{ marginTop: "16px" }}>
          View Projects
        </button>
      </Link>
    </div>
  );
};

export default Drop;
