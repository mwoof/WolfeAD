import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./indexStyle.css";

import DropDown from "../Dropdown";
import SearchBar from "../SearchBar";

class Filter extends Component {
  state = {
    listView: false,
  };

  render() {
    let { listView } = this.state;
    let tabComps = this.props.tabs.map((tab) => (
      <NavLink
        to={`/projects/${tab.link}`}
        className="button"
        activeClassName="tab-txt-hlght"
        key={Math.random()}
        exact
      >
        {tab.title}
      </NavLink>
    ));

    return (
      <div className="filt-cont flex-cent flex-col">
        <div className="filt-wrap">{tabComps}</div>
        <div className="filt-but-wrap flex-cent">
          <SearchBar placeholder="Enter Project..." />
          <DropDown />
          <DropDown />
          <button className="but-line">Awarded</button>
          <button className="but-line svg-button-sml ">
            <svg viewBox="0 0 24 24">
              <path
                fill={`${listView ? "active-view" : "#fff"}`}
                d="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
