import React from "react";
import { Link } from "react-router-dom";

import "./indexStyle.css";

const Drop = (props) => {
  const id = props.data.id;
  const name = props.data.data.name ? props.data.data.name : "";
  const location = props.data.data.location;
  const image = props.data.data.cover;

  let strLngth = 20;
  function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

  const list = (
    <div
      className="tile-wrap"
      style={{
        animationDelay: `${props.delay}s`,
      }}
    >
      <Link
        key={Math.random()}
        to={`/projects/project/${id}/${
          name && name.includes(" ") ? name.replace(/\s+/g, "-") : name
        }`}
        className="list-cont flex-rit"
      >
        <img src={image} alt={`wolfeAD ${name}`} />
        <div className="list-txt-cont">
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

  const tile = (
    <div
      className="tile-wrap"
      style={{
        animationDelay: `${props.delay}s`,
      }}
    >
      <Link
        key={Math.random()}
        to={`/projects/project/${id}/${
          name && name.includes(" ") ? name.replace(/\s+/g, "-") : name
        }`}
        className="tile-cont flex-cent"
        style={{
          backgroundImage: `url(${image})`,
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

  const noLink = (
    <div
      className="tile-wrap"
      style={{
        animationDelay: `${props.delay}s`,
      }}
    >
      <div
        key={Math.random()}
        className="tile-cont flex-cent"
        style={{
          backgroundImage: `url(${image})`,
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
      </div>
    </div>
  );
  return props.noLink
    ? noLink
    : props.view || typeof props.view === "undefined"
    ? tile
    : list;
};

export default Drop;
