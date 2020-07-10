import React from "react";
import { Link } from "react-router-dom";

import "./indexStyle.css";

import Image from "../../../media/images/Img1.png";

const Drop = props => {
  const id = props.data.id;
  const name = props.data.data.name;
  const location = props.data.data.location;
  const image = props.data.data.cover;

  let strLngth = 20;

  return (
    <Link
      to={`/projects/project/${id}/${name.replace(/\s+/g, "-")}`}
      className="tile-cont flex-cent"
    >
      <img src={image} />
      <div className="tile-overlay flex-cent flex-col">
        <h1>
          {name.length < strLngth ? name : name.substring(0, strLngth) + "..."}
        </h1>
        <p className="nav-txt ">{location}</p>
      </div>
    </Link>
  );
};

export default Drop;
