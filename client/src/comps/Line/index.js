import React from "react";

import "./indexStyle.css";

const Landing = (props) => {
  return (
    <div
      className={`gen-lin ${props.className}`}
      style={{ width: props.width, height: 0 }}
    ></div>
  );
};

export default Landing;
