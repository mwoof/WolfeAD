import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./indexStyle.css";

import Image from "../../media/images/LandingTest.jpg";

const Landing = (props) => {
  // const goBack = props.history.goback();
  let history = useHistory();
  return (
    <div className="project-cont flex-cent">
      <div className="backButton" onClick={(e) => history.goBack()}>
        Back
      </div>
      <img src={Image} alt="WolfeAD Landing Page" />
    </div>
  );
};

export default Landing;
