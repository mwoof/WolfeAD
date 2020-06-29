import React from "react";

import "./indexStyle.css";

import Img1 from "../../../media/images/Img1.png";
import Img2 from "../../../media/images/Img2.png";
import Img3 from "../../../media/images/Img3.png";

const Section = (props) => {
  return (
    <div className="med-wrap project-car">
      <div className="med-shad-top"></div>
      <img src={Img1} className="img-shadow" />
      <img src={Img2} className="img-shadow" />
      <img src={Img3} className="img-shadow" />
    </div>
  );
};

export default Section;
