import React from "react";

import "./indexStyle.css";

import Image from "../../../media/images/LandingTest.jpg";

function Landing() {
  return (
    <div className="Landing-cont flex-cent">
      <img src={Image} alt="WolfeAD Landing Page" />
    </div>
  );
}

export default Landing;
