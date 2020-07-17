import React, { Component } from "react";
import Slider from "react-slick";

import "./indexStyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "./Slide";

import Commercial from "../../../media/images/Landing/LandingTestCom.jpg";
import Institutional from "../../../media/images/Landing/LandingTestIns.jpg";
import Residential from "../../../media/images/Landing/LandingTestRes.jpg";
import Boards from "../../../media/images/Landing/LandingTestBor.jpg";
// import Boards from "../../../media/images/Landing/LandingTestRes.jpg";

// function Landing() {
// class Landing extends Component {
// render() {

class Landing extends Component {
  constructor(props) {
    super(props);
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
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    };

    return (
      <div className="Landing-cont test-g-wrap flex-cent ">
        <div
          className="land-nav-arr flex-cent"
          style={{ left: 0 }}
          onClick={(e) => this.previous()}
        >
          <svg viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
            />
          </svg>
        </div>
        <div
          className="land-nav-arr flex-cent"
          style={{ right: 0, transform: "rotate(180deg)" }}
          onClick={(e) => this.next()}
        >
          <svg viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
            />
          </svg>
        </div>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {!this.props.slides ? (
            <div>
              <div className="slide-wrap flex-cent flex-col txt-hlght">
                loading...
              </div>
            </div>
          ) : (
            this.props.slides.map((slide) => (
              <Slide
                key={Math.random()}
                type={slide.type}
                image={slide.image}
                location="Private Res. St. Louis, MO"
                link={slide.value}
              />
            ))
          )}
        </Slider>
      </div>
    );
  }
}

export default Landing;
