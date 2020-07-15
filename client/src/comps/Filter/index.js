import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import "./indexStyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DropDown from "../Dropdown";
import SearchBar from "../SearchBar";

class Filter extends Component {
  state = {
    // listView: false
    // sortSElect: 0,
  };
  setSelected = selection => {
    this.setState({ category: selection });
  };

  render() {
    let { listView, sortSElect } = this.state;
    let tabComps = this.props.tabs.map((tab, i) => (
      <NavLink
        to={`/projects/${i < 1 ? "" : tab.toLowerCase().replace(/\s/g, "")}`}
        className="button"
        activeClassName="tab-txt-hlght"
        key={Math.random()}
        exact
      >
        {tab}
      </NavLink>
    ));

    let sort = ["commercial", "institutional", "residential", "on the boards"];
    const settings = {
      dots: false,
      speed: 500,
      arrows: false,
      slidesToShow: 5,
      infinite: false,
      slidesToScroll: 1.5,
      focusOnSelect: true,
      centerMode: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1.2
          }
        },
        {
          breakpoint: 390,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    };
    return (
      <div className="filt-cont flex-cent flex-col">
        <div className="filt-wrap filt-wrap-desk  desktop-only">{tabComps}</div>
        <div className="filt-but-wrap flex-cent">
          <SearchBar
            placeholder="Enter Project..."
            className="filt-srch-bar"
            setSearch={e => this.props.setSearch(e)}
          />
          <DropDown
            className="desktop-only "
            items={sort}
            placeholder="Filter"
            setSelected={this.setSelected}
          />
          <DropDown
            className="desktop-only "
            items={sort}
            selected={sortSElect}
            placeholder="Sort"
            setSelected={this.setSelected}
          />

          <button className="but-line txt desktop-only ">Awarded</button>
          <button
            className="but-line svg-button-sml "
            onClick={e => {
              this.props.setView();
            }}
          >
            <svg viewBox="0 0 24 24">
              <path
                fill={`${
                  this.props.view ? "rgba(255, 255, 255, 0.3)" : "#fff"
                }`}
                d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"
              />
            </svg>
          </button>
        </div>
        <div className="filt-wrap moile-only trey-styling  ">
          <div className="filt-slide-wrap  moile-only">
            <Slider {...settings}>
              {this.props.tabs.map((tab, i) => (
                <NavLink
                  to={`/projects/${
                    i < 1 ? "" : tab.toLowerCase().replace(/\s/g, "")
                  }`}
                  className="button"
                  activeClassName="tab-txt-hlght"
                  key={Math.random()}
                  exact
                >
                  {tab}
                </NavLink>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
