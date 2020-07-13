import React from "react";
import { Link } from "react-router-dom";

import Image from "../../../media/images/Img1.png";

const Drop = props => {
  return (
    <div
      draggable
      key={Math.randome}
      className="tile-cont"
      style={{ backgroundImage: `url(${props.data})` }}
    >
      <div className="tile-footer">buttons</div>
    </div>
  );
};

export default Drop;
