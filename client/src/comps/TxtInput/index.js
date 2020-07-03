import React from "react";

import "./indexStyle.css";

const Drop = (props) => {
  return (
    <input
      className="input-input but-line input-cont"
      placeholder={props.placeholder}
    />
  );
};

export default Drop;
