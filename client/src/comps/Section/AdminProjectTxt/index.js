import React from "react";

import Line from "../../Line";
import Dropdown from "../../Dropdown";

const Section = props => {
  let items = ["commercial", "institutional", "residential", "on the boards"];

  return (
    <div>
      <h1>Project Information</h1>

      <input
        required
        style={{ width: "100%", margin: "16px 0" }}
        className="input-input but-line input-cont"
        placeholder="Name"
        id="name"
        value={props.name}
        onChange={e => props.enterInfo(e.target)}
      />
      <div className="rendr-txt-cont" style={{ width: "100%" }}>
        <Dropdown
          style={{ width: "50%", marginRight: 0 }}
          items={items}
          placeholder="Category"
          selected={props.category}
          setSelected={props.setSelected}
        />
        <input
          required
          style={{ width: "50%", marginRight: 0 }}
          className="input-input but-line input-cont"
          placeholder="Location (City, ST)"
          id="location"
          value={props.location}
          onChange={e => props.enterInfo(e.target)}
        />
      </div>

      <textarea
        required
        style={{ width: "100%", height: "100px" }}
        className="input-input but-line input-cont"
        placeholder="Describer the project..."
        id="description"
        value={props.description}
        onChange={e => props.enterInfo(e.target)}
      />
    </div>
  );
};

export default Section;
