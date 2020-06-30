import React, { Component } from "react";

import Section from "../comps/Section";
import SectionRev from "../comps/SectionRev";
import SectionGall from "../comps/SectionGall";

import Banner from "../comps/Banner";
import ServiceTxt from "../comps/Section/ServText";
import ServiceMdia from "../comps/Section/Media";

import RendrImg from "../media/images/RenderImg.png";
import AdminBanner from "../media/images/AdminBanner.png";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner image={AdminBanner} />
        <div className="sec-wrap">
          <Section lable="Landing"></Section>
          <Section lable="Featured"></Section>
          <SectionGall lable="Archive"></SectionGall>
        </div>
      </div>
    );
  }
}

export default Home;
