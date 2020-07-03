import React from "react";

import "./indexStyle.css";

const Drop = (props) => {
  const selected = "Featured";

  console.log(props.items);
  console.log(props.selected);
  console.log(props.items[props.selected]);

  return (
    <button className="but-line drop-dwn-cont">
      {props.selected !== undefined ? (
        <div className="nav-txt">{props.items[props.selected].name}</div>
      ) : (
        <div className="txt">{props.placeholder}</div>
      )}
      <svg
        width="24px"
        height="24px"
        style={{ marginLeft: "8px" }}
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
      </svg>
    </button>
  );
};

export default Drop;
