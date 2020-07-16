import React from "react";
import { NavLink } from "react-router-dom";

import Highlight from "./Hilight";

const Section = props => {
  const links = [
    {
      txt: "See more stats",
      link:
        "https://analytics.google.com/analytics/web/#/report-home/a133855866w193778326p189308928"
    },
    { txt: "compress PNGs", link: "https://compresspng.com/" },
    { txt: "compress JPEGs", link: "https://compressjpeg.com/" }
  ];

  return (
    <div>
      <div className="land-act-flex">
        <Highlight stat="Stat" lable="Page Views" />
        <Highlight stat="Stat" lable="Page Views" />
        <Highlight stat="Stat" lable="Page Views" />
      </div>
      <div className="land-act-flex">
        {links.map(link => (
          <a
            key={Math.random()}
            href={link.link}
            className="button txt-hlght flex-cent"
            target="_blank"
            style={{
              margin: "16px 0 0 ",
              padding: " 2px 8px"
            }}
          >
            {link.txt}
            <svg
              style={{ marginLeft: "8px", height: "18px", width: "18px" }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Section;
