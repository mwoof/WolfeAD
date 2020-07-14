import React from "react";
import { Link } from "react-router-dom";

import "./indexStyle.css";

import Image from "../../../media/images/Img1.png";

const Drop = props => {
  const id = props.data.id;
  const name = props.data.data.name ? props.data.data.name : "";
  const location = props.data.data.location;
  const image = props.data.data.cover;

  let strLngth = 20;
  function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

  return (
    <div
      className="tile-wrap"
      style={{
        animationDelay: `${props.delay}s`
      }}
    >
      <Link
        key={Math.random()}
        to={`/projects/project/${id}/${
          name && name.includes(" ") ? name.replace(/\s+/g, "-") : name
        }`}
        className="tile-cont flex-cent"
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <div className="tile-overlay flex-cent flex-col">
          <h1>
            {name.length < strLngth
              ? name
              : name.substring(0, strLngth) + "..."}
          </h1>
          <p className="nav-txt ">{location}</p>
        </div>
      </Link>
    </div>
  );
};

export default Drop;
