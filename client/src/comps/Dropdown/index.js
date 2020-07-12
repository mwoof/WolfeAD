import React, { Component } from "react";

import "./indexStyle.css";

// const Drop = (props) => {
class Drop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  render() {
    const { items, selected, placeholder, style } = this.props;
    const { opened } = this.state;

    const options = items.map(item => <div>{item.name}</div>);

    return (
      <div style={{ position: "relative" }} style={style}>
        <button
          className="but-line drop-dwn-cont"
          style={{ width: "Calc(100% - 16px)" }}
          onClick={() => {
            this.setState({ opened: !opened, selected: "" });
          }}
        >
          {selected !== undefined ? (
            <div className="nav-txt">{items[selected].name}</div>
          ) : (
            <div className="txt">{placeholder}</div>
          )}
          <svg
            width="24px"
            height="24px"
            style={{
              marginLeft: "8px",
              transform: `rotate(${!opened ? 0 : "180deg"})`
            }}
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
          </svg>
        </button>
        <div
          className="drop-pop-wrap"
          style={{ display: !opened ? "none" : "block" }}
        >
          {options}
        </div>
      </div>
    );
  }
}

export default Drop;
