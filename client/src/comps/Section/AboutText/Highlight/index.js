import React from "react";

import Line from "../../../Line";

const Section = (props) => {
  return (
    <div>
      <Line width="100%" className="Highlight-con-lin" />
      <div className="flex-rit">
        <p className="title">{props.number}</p>
        <p className="title sub-title">{props.unit}</p>
      </div>

      <p style={{ margin: 0 }}>{props.text}</p>
    </div>
  );
};

export default Section;
