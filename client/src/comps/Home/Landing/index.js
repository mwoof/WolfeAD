import React, { Component } from "react";
import Slider from "react-slick";

import firebase from "../../../firebase";

import "./indexStyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "./Slide";

import Commercial from "../../../media/images/Landing/LandingTestCom.jpg";
import Institutional from "../../../media/images/Landing/LandingTestIns.jpg";
import Residential from "../../../media/images/Landing/LandingTestRes.jpg";
import Boards from "../../../media/images/Landing/LandingTestBor.jpg";
// import Boards from "../../../media/images/Landing/LandingTestRes.jpg";

const db = firebase.firestore();
// function Landing() {
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    db.collection("projects")
      .doc("--STATS--")
      .get()
      .then(doc => {
        this.setState({ slides: doc.data().landing });
      });
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
      pauseOnHover: true
    };

    return (
      <div className="Landing-cont test-g-wrap flex-cent ">
        <Slider {...settings}>
          {!this.state.slides ? (
            <div>
              <div className="slide-wrap flex-cent flex-col txt-hlght">
                loading...
              </div>
            </div>
          ) : (
            this.state.slides.map(slide => (
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

//<img src={Image} alt="WolfeAD Landing Page" />
// <img src={Image} alt="WolfeAD Landing Page" />

// <Slide
//   type="Commercial"
//   image={Commercial}
//   location="Private Res. St. Louis, MO"
//   link="commercial"
// />
// <Slide
//   type="Institutional"
//   image={Institutional}
//   location="Private Res. St. Louis, MO"
//   link="institutional"
// />
// <Slide
//   type="Residential"
//   image={Residential}
//   location="Private Res. St. Louis, MO"
//   link="residential"
// />
// <Slide
//   type="On The Boards"
//   image={Boards}
//   location="Private Res. St. Louis, MO"
//   link="boards"
// />
