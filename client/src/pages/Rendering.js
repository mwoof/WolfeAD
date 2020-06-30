import React, { Component } from "react";

import Section from "../comps/Section";
import SectionRev from "../comps/SectionRev";
import SectionCarousel from "../comps/SectionCarousel";

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
            lable="Services"
            text={<ServiceTxt />}
            media={<ServiceMdia image={RendrImg} />}
          ></Section>
        </div>
      </div>
    );
  }
}

export default Home;
