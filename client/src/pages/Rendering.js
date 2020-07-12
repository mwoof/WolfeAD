import React, { Component } from "react";

import Section from "../comps/Section";
import SectionGall from "../comps/SectionGall";
import DotGrid from "../comps/grid";

import Banner from "../comps/Banner";
// import ServiceTxt from "../comps/Section/ServText";
import RendrTxt from "../comps/Section/RenderTxt";
import ServiceMdia from "../comps/Section/Media";

import RendrImg from "../media/images/RenderImg.png";
import RenderBanner from "../media/images/RenderBanner.png";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Banner image={RenderBanner} />
        <div className="sec-wrap">
          <Section
            lable="Render"
            text={<RendrTxt />}
            media={<ServiceMdia image={RendrImg} />}
          ></Section>
          <SectionGall lable="Archive" />
          <div className="grid-wrapper flex-cent">
            <div className="spacing" style={{ height: "100%" }}>
              <DotGrid top="12%" left="-66px" />
              <DotGrid top="32%" right="-66px" />
              <DotGrid top="60%" left="-66px" />
              <DotGrid top="80%" right="-66px" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
