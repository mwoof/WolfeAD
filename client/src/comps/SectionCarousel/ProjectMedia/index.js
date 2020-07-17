import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "./indexStyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "./ProjectMediaSlide";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      speed: 500,
      arrows: false,
      slidesToShow: 1.2,
      infinite: false,
      slidesToScroll: 1,
      focusOnSelect: true,
      variableWidth: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
    };

    return (
      <div className="med-wrap project-car">
        <div className="med-shad-top"></div>

        <Slider
          ref={(c) => (this.slider = c)}
          {...settings}
          className="car-sec-car-wrap"
        >
          {!this.props.projects
            ? ""
            : this.props.featured.map((id) => (
                <Slide
                  key={Math.random()}
                  data={this.props.projects[id]}
                  id={id}
                />
              ))}
          <Link to="/projects" className="  project-all-slide txt-hlght ">
            <div className=" flex-cent flex-col">
              <div style={{ textAlign: "center" }}>
                View more
                <br /> projects
              </div>
              <svg viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M6,13V11H14L10.5,7.5L11.92,6.08L17.84,12L11.92,17.92L10.5,16.5L14,13H6M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z"
                />
              </svg>
            </div>
          </Link>
        </Slider>
        <div className="flex-cent carosel-button-wrap">
          <button onClick={(e) => this.previous()}>
            <svg
              viewBox="0 0 24 24"
              style={{
                opacity: this.state.activeSlide !== 0 ? 1 : 0.3,
              }}
            >
              <path
                fill="#fff"
                d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
              />
            </svg>
          </button>

          <div>{`${
            this.state.activeSlide < 3 ? this.state.activeSlide + 1 : "-"
          }/3`}</div>

          <button onClick={(e) => this.next()}>
            <svg
              viewBox="0 0 24 24"
              style={{
                transform: "rotate(180deg)",
                opacity: this.state.activeSlide < 3 ? 1 : 0.3,
              }}
            >
              <path
                fill="#fff"
                d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default Section;
