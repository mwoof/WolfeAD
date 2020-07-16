import React from "react";

import Line from "../../Line";
import Dropdown from "../../Dropdown";

const Section = props => {
  let information = ["Product", "Interior", "Exterior", "Multiple"];
  let timeline = ["1-3 Weeks", "1 Week", "Expedited"];
  let numbers = [0, 1, 2, 3, 4, 5];
  const setSelected = selcted => {
    console.log(selcted);
  };

  return (
    <div>
      <h1>Architectural Rendering</h1>
      <p>
        Wolfe A&D provides photorealistic rendering as a service. Fill out the
        form below to generates a quote.
      </p>
      <div className="rendr-txt-cont">
        <Dropdown
          items={information}
          placeholder="Information"
          setSelected={setSelected}
        />
        <Dropdown
          items={timeline}
          placeholder="Timeline"
          setSelected={timeline}
        />
      </div>
      <div className="rendr-txt-cont">
        <Dropdown
          items={numbers}
          placeholder="Scenes"
          setSelected={setSelected}
        />
        <Dropdown
          items={numbers}
          placeholder="Shots"
          setSelected={setSelected}
        />
      </div>
      <input
        className="input-input but-line input-cont"
        placeholder="Email address..."
        onChange={e => this.setState({ email: e.target.value })}
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
