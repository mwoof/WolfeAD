import React, { Component } from "react";

import "./indexStyle.css";

import Line from "../Line";
import Gallery from "../Gallery";

// const Section = (props) => {
class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 800, animate: false };
    this.contentbox = React.createRef();
  }
  componentDidMount() {
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
    const { height, animate } = this.state;
    var container = this.contentbox.current.getBoundingClientRect();

    if (container.top < height - 400 && !animate) {
      return this.setState({
        animate: true
      });
    }
    if (container.top > height - 400 && animate) {
      return this.setState({
        animate: false
      });
    }
  };
  scroll = () => {
    this.animCheck();
  };
  render() {
    const { lable, media, text, gallType } = this.props;
    const { animate } = this.state;
    return (
      <section
        ref={this.contentbox}
        className={`sect-cont sect-gal-cont ${animate ? "act-anim" : ""}`}
      >
        <div className="sect-lbl sec-txt">
          <div style={{ position: "relative" }}>
            {`${lable}.`}
            <Line className="sect-lbl-lin" width="50vw" />
          </div>
        </div>
        <div className="sect-act">{this.props.action}</div>
        {!gallType ? (
          <Gallery className="sect-gal" noMargin={true} />
        ) : (
          gallType
        )}
      </section>
    );
  }
}

export default Section;
