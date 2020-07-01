import React, { Component } from "react";

import "./indexStyle.css";

import Line from "../Line";

// const Section = (props) => {
class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0, animate: false };
    this.contentbox = React.createRef();
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("scroll", this.scroll, false);
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scroll, false);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    let trigger =
      window.innerWidth < 768
        ? window.innerHeight + window.innerHeight * 0.3
        : window.innerHeight + 48;
    this.setState({ height: trigger });
  };
  scroll = () => {
    const { height, animate } = this.state;
    var container = this.contentbox.current.getBoundingClientRect();

    if (container.bottom < height && !animate) {
      return this.setState({
        animate: true,
      });
    }
    if (container.bottom > height && animate) {
      return this.setState({
        animate: false,
      });
    }
  };

  render() {
    const { lable, media, text } = this.props;
    const { animate } = this.state;

    return (
      <section
        className={`sect-cont ${animate ? "act-anim" : ""}`}
        ref={this.contentbox}
      >
        <div className="sect-lbl sec-txt">
          <div style={{ position: "relative" }}>
            {`${lable}.`}
            <Line className="sect-lbl-lin" width="50vw" />
          </div>
        </div>
        <div className="sect-mdia">{media}</div>
        <div className="sect-txt">{text}</div>
      </section>
    );
  }
}

export default Section;
