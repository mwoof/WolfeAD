import React from "react";
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

const Landing = props => {
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
        {!props.slides ? (
          <div>
            <div className="slide-wrap flex-cent flex-col txt-hlght">
              loading...
            </div>
          </div>
        ) : (
          props.slides.map(slide => (
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
};

export default Landing;
