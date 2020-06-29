import React from "react";

import "./indexStyle.css";

import Line from "../../Line";

const Section = (props) => {
  return (
    <div>
      <h1>Architectural Services</h1>
      <h2>
        Wolfe A&D helps clients set the parameters for the design process;
        defining budgets, schedules, special programing and goals
      </h2>
      <Line width="60%" className="serv-div" />
      <h1>Programming & Predesign</h1>
      <Line width="60%" className="serv-div" />
      <h1>Project Rendering</h1>
      <Line width="60%" className="serv-div" />
      <h1>Beyond Design Services</h1>
    </div>
  );
};

export default Section;
