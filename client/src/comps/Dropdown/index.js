import React, { Component } from "react";

import "./indexStyle.css";

// const Drop = (props) => {
class Drop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      selected: false
    };
  }
  componentDidMount() {
    this.props.selected !== undefined &&
      this.setState({ selected: this.props.selected });
  }

  render() {
    const { items, placeholder, style } = this.props;
    const { opened, selected } = this.state;

    const options = items.map(item => (
      <div onClick={e => this.setState({ opened: false, selected: item.name })}>
        {item.name}
      </div>
    ));

    return (
      <div style={style}>
        <div style={{ position: "relative" }}>
          <button
            className="but-line drop-dwn-cont"
            style={{ width: "Calc(100% - 16px)" }}
            onClick={() => {
              this.setState({ opened: !opened, selected: "" });
            }}
          >
            {selected ? (
              <div className="nav-txt text-trans-cap">{selected}</div>
            ) : (
              <div className="txt text-trans-cap">{placeholder}</div>
            )}
            <svg
              style={{
                marginLeft: "8px",
                transform: `rotate(${!opened ? 0 : "180deg"})`,
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
              display: !opened ? "none" : "block",
              width: "Calc(100% - 16px)"
            }}
          >
            {options}
          </div>
        </div>
      </div>
    );
  }
}

export default Drop;
