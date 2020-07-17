import React from "react";
import { Link } from "react-router-dom";

import Line from "../../Line";

const Section = (props) => {
  return (
    <div>
      <h1>Office</h1>
      <p>
        7412 Manchester Rd <br />
        St. Louis Missouri 63143
      </p>
      <p>
        <a className="txt" href="mailto:mattwolfe@wolfead.net">
          mattwolfe@wolfead.net
        </a>
        <br />
        314-960-0099 <br /> <br />
      </p>

      <a href="https://www.google.com/maps/place/Wolfe+Architecture+%26+Design/@38.6122807,-90.3223777,17z/data=!4m8!1m2!2m1!1swolfe+a%26d!3m4!1s0x87d8cbf1a12ddb3f:0xf072dcaedc44e5e8!8m2!3d38.6122807!4d-90.320189">
        <button style={{ marginLeft: "-16px" }}>
          <svg
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"
            />
          </svg>

          <div>Get Directions</div>
        </button>
      </a>
    </div>
  );
};

export default Section;
