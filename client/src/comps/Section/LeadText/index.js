import React from "react";

import Line from "../../Line";

const Section = (props) => {
  return (
    <div>
      <h1>Matt Wolfe</h1>
      <p style={{ margin: "0 0 8px 0" }}>Principal & Founder</p>
      <Line width="30%" className="" />
      <p style={{ margin: "32px 0 48px" }}>
        Matt is the founder and a principal of Wolfe Architecture & Design
        headquartered in St. Louis, Missouri. Matt leads each project with a
        team tailored to the client's needs. Each team provides attentive
        personal service ensuring that we meet or exceeds our clients goals.
      </p>

      <p>
        <a className="txt-hlght" href="mailto:mattwolfe@wolfead.net">
          mattwolfe@wolfead.net
        </a>
        <br />
        314-960-0099
      </p>
      <Line width="30%" className="" />
    </div>
  );
};

export default Section;
