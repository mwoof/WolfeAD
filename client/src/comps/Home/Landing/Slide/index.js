import React from "react";
import { Link } from "react-router-dom";

import "./indexStyle.css";

const Drop = props => {
  let strLngth = 20;

  return (
    <div className="slide-wrap flex-cent flex-col">
      <Link
        to={`/projects/${props.link}`}
        className="slide-link flex-cent flex-col"
      >
        <h1>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</h1>
        <div className="landing-location nav-txt">{props.location}</div>
        <button className="but-line" style={{ marginTop: "16px" }}>
          View Projects
        </button>
        <img
          className="slide-img"
          src={props.image}
          alt="WolfeAD Landing Page"
        />
      </Link>
    </div>
  );
};

export default Drop;
