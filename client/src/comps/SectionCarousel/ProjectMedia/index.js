import React from "react";
import Slider from "react-slick";

import "./indexStyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "./ProjectMediaSlide";

import Img1 from "../../../media/images/Img1.png";
import Img2 from "../../../media/images/Img2.png";
import Img3 from "../../../media/images/Img3.png";

const Section = props => {
  const settings = {
    dots: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1.2,
    infinite: false,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true
  };

  return (
    <div className="med-wrap project-car">
      <div className="med-shad-top"></div>
      <Slider {...settings} className="car-sec-car-wrap">
        {!props.projects
          ? ""
          : props.featured.map(id => (
              <Slide key={Math.random()} data={props.projects[id]} id={id} />
            ))}
      </Slider>
    </div>
  );
};

export default Section;
