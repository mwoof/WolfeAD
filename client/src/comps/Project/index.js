import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./indexStyle.css";

import Image from "../../media/images/Img1.png";

const Landing = (props) => {
  // const goBack = props.history.goback();
  const history = useHistory();
  const [view, setView] = useState(0);
  const [info, setInfo] = useState(0);

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
        <div
          className="proj-but flex-cent"
          style={{ bottom: `${!view ? 0 : "160px"}` }}
        >
          <div>
            <button className="" onClick={() => setInfo(!info)}>
              Project Name
              <svg
                width="24px"
                height="24px"
                style={{ marginLeft: "8px" }}
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M7,15L12,10L17,15H7Z" />
              </svg>
            </button>
            <div className={`info-cont ${!info ? "" : "info-cont-ext"}`}>
              This is a bunch of text
            </div>
          </div>

          <button className="" onClick={() => setView(!view)}>
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <img
        src={Image}
        style={{ height: `${!view ? "100vh" : "Calc(100vh - 160px)"}` }}
        alt="WolfeAD Landing Page"
      />
    </div>
  );
};

export default Landing;
