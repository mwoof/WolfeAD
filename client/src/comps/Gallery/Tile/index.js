import React from "react";
import { Link } from "react-router-dom";

import "./indexStyle.css";

import Image from "../../../media/images/Img1.png";

const Drop = (props) => {
  const link = "project1";
  const name = "Project 1";
  const image = Image;

  return (
    <Link to={`/projects/project/${link}`} className="tile-cont flex-cent">
      <img src={image} />
      <div className="tile-overlay flex-cent flex-col">
        <h1>{name}</h1>
      </div>
    </Link>
  );
};

export default Drop;
