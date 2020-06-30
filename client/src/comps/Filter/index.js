import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./indexStyle.css";

class Filter extends Component {
  render() {
    let tabComps = this.props.tabs.map((tab) => (
      <NavLink
        to={`/projects/${tab.link}`}
        className="button"
        activeClassName="tab-txt-hlght"
      >
        {tab.title}
      </NavLink>
    ));

    return (
      <div className="filt-cont flex-cent">
        <div className="filt-wrap">{tabComps}</div>
      </div>
    );
  }
}

export default Filter;
