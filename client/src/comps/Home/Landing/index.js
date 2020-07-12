import React, { Component } from "react";
import Slider from "react-slick";

import "./indexStyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "../../../media/images/LandingTest.jpg";

// function Landing() {
class Landing extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };

    return (
      <div className="Landing-cont test-g-wrap flex-cent ">
        <Slider {...settings}>
          <div>
            <div className="slide-wrap flex-cent flex-col">
              <img src={Image} alt="WolfeAD Landing Page" />
              <h1>Residential</h1>
              <div className="landing-location nav-txt">
                Private Res. St. Louis, MO
              </div>
              <button className="but-line" style={{ marginTop: "16px" }}>
                View Project
              </button>
            </div>
          </div>
          <div>
            <div className="slide-wrap flex-cent flex-col">
              <img src={Image} alt="WolfeAD Landing Page" />
              <div>
                <h1>Residential</h1>
                <div className="txt-hlght">Private Res. St. Louis, MO</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default Landing;

//<img src={Image} alt="WolfeAD Landing Page" />
// <img src={Image} alt="WolfeAD Landing Page" />
