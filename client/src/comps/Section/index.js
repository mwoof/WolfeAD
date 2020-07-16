import React, { Component } from "react";

import "./indexStyle.css";

import Line from "../Line";

// const Section = (props) => {
class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 800, animate: false };
    this.contentbox = React.createRef();
  }
  componentDidMount() {
    console.log("mounted");
    this.updateWindowDimensions();
    this.animCheck();
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
  animCheck = () => {
    console.log("running check");
    const { height, animate } = this.state;
    var container = this.contentbox.current.getBoundingClientRect();
    console.log(container.bottom, height, animate);

    if (container.bottom < height && !animate) {
      return this.setState({
        animate: true
      });
    }
    if (container.bottom > height && animate) {
      return this.setState({
        animate: false
      });
    }
  };
  scroll = () => {
    this.animCheck();
  };

  render() {
    const { lable, media, text } = this.props;
    const { animate } = this.state;

    return (
      <section
        className={`sect-cont ${animate ? "act-anim" : ""}`}
        ref={this.contentbox}
        id={this.props.id ? this.props.id : Math.random()}
      >
        <div className="sect-lbl">
          <div style={{ position: "relative" }}>
            <div className="sec-txt">{`${lable}.`}</div>
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
