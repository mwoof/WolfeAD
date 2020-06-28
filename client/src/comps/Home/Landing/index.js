import React from "react";

import "./indexStyle.css";

import Image from "../../../media/images/LandingTest.jpg";

function Landing() {
  return (
    <div className="Landing-cont">
      <img src={Image} alt="WolfeAD Landing Page" />
    </div>
  );
}

export default Landing;
