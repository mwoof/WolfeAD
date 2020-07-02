import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./indexStyle.css";

import Image from "../../media/images/Img1.png";

const Landing = (props) => {
  // const goBack = props.history.goback();
  let history = useHistory();
  return (
    <div className="project-cont flex-cent">
      <div className="button-overlay spacing">
        <div className="proj-but-top flex-cent">
          <button className="txt-hlght" onClick={(e) => history.goBack()}>
            <svg
              width="24px"
              height="24px"
              style={{ marginRight: "8px" }}
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
              />
            </svg>
            Back
          </button>
          <button className="txt-hlght">Share</button>
        </div>
        <div className="proj-but-bot flex-cent">
          <button className="" onClick={(e) => history.goBack()}>
            Project Name
          </button>
          <button className="">
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <img src={Image} alt="WolfeAD Landing Page" />
    </div>
  );
};

export default Landing;
