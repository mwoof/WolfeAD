import React, { Component } from "react";

import Section from "../comps/Section";
import SectionGall from "../comps/SectionGall";

import Banner from "../comps/Banner";
import ServiceTxt from "../comps/Section/ServText";
import ServiceMdia from "../comps/Section/Media";

import RendrImg from "../media/images/RenderImg.png";
import RenderBanner from "../media/images/RenderBanner.png";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner image={RenderBanner} />
        <div className="sec-wrap">
          <Section
            lable="Rendering"
            text={<ServiceTxt />}
            media={<ServiceMdia image={RendrImg} />}
          ></Section>
          <SectionGall lable="Archive"></SectionGall>
        </div>
      </div>
    );
  }
}

export default Home;
