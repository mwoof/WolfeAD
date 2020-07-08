import React from "react";

import Line from "../../Line";
import Dropdown from "../../Dropdown";

const Section = (props) => {
  let sort = [{ name: "Date", value: "date" }];

  return (
    <div>
      <h1>Architectural Rendering</h1>
      <p>
        Wolfe A&D provides photorealistic rendering as a service. Fill out the
        form below to generates a quote.
      </p>
      <div className="rendr-txt-cont">
        <Dropdown items={sort} placeholder="Information" />
        <Dropdown items={sort} placeholder="Timeline" />
      </div>
      <div className="rendr-txt-cont">
        <Dropdown items={sort} placeholder="00" />
        <Dropdown items={sort} placeholder="00" />
      </div>
      <input
        className="input-input but-line input-cont"
        placeholder="Email address..."
        onChange={(e) => this.setState({ email: e.target.value })}
      />
      <button className="but-fill" style={{ marginBottom: "16px" }}>
        Submit
      </button>

      <Line width="100px" />
      <p style={{ marginTop: "16px" }} className="title">
        Quote
      </p>
      <p style={{ margin: "0" }}>Please fill out the Preceding form</p>
    </div>
  );
};

export default Section;
