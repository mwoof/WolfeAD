import React, { Component } from "react";
import Slider from "react-slick";

import "./indexStyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "./Slide";

import Commercial from "../../../media/images/Landing/LandingTestCom.jpg";
import Institutional from "../../../media/images/Landing/LandingTestIns.jpg";
import Residential from "../../../media/images/Landing/LandingTestRes.jpg";
// import Boards from "../../../media/images/Landing/LandingTestBor.jpg";
import Boards from "../../../media/images/Landing/LandingTestRes.jpg";

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
          <Slide
            type="Commercial"
            image={Commercial}
            location="Private Res. St. Louis, MO"
            link="commercial"
          />
          <Slide
            type="Institutional"
            image={Institutional}
            location="Private Res. St. Louis, MO"
            link="institutional"
          />
          <Slide
            type="Residential"
            image={Residential}
            location="Private Res. St. Louis, MO"
            link="residential"
          />
          <Slide
            type="On The Boards"
            image={Boards}
            location="Private Res. St. Louis, MO"
            link="boards"
          />
        </Slider>
      </div>
    );
  }
}
export default Landing;

//<img src={Image} alt="WolfeAD Landing Page" />
// <img src={Image} alt="WolfeAD Landing Page" />
