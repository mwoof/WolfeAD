import React, { useState } from "react";

import "./indexStyle.css";

// const Drop = (props) => {
// class Drop extends Component {
const Drop = props => {
  const [open, setOpen] = useState(props.data);

  const { items, placeholder, style, selected } = props;
  const options = !items
    ? []
    : items.map(item => <div onClick={e => select(item)}>{item}</div>);

  const select = selction => {
    console.log(selction);
    setOpen(!open);
    props.setSelected(selction);
  };

  return (
    <div style={style}>
      <div style={{ position: "relative" }}>
        <button
          className="but-line drop-dwn-cont"
          style={{ width: "100%" }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div
            className={`nav-txt stext-trans-cap ${selected ? "" : "light-txt"}`}
          >
            {selected ? selected : placeholder}
          </div>

          <svg
            style={{
              marginLeft: "8px",
              transform: `rotate(${!open ? 0 : "180deg"})`,
              width: "24px",
              height: "24px"
            }}
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
          </svg>
        </button>
        <div
          className="drop-pop-wrap"
          style={{
            display: !open ? "none" : "block",
            width: "100%"
          }}
        >
          {options}
        </div>
      </div>
    </div>
  );
};

export default Drop;
