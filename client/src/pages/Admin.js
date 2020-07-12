import React, { Component } from "react";

import Section from "../comps/SectionCarousel";
import SectionGall from "../comps/SectionGall";

import Banner from "../comps/Banner";
import LandAct from "../comps/SectionCarousel/LandAct";
import FeatAct from "../comps/SectionCarousel/FeatAct";
import ServiceTxt from "../comps/Section/ServText";
import ServiceMdia from "../comps/Section/Media";

import RendrImg from "../media/images/RenderImg.png";
import AdminBanner from "../media/images/AdminBanner.png";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let landTxt = (
      <div style={{ margin: 0 }}>
        These are projects that display on the landing page slideshow. There
        should be one project for each category.
      </div>
    );
    let fetTxt = (
      <div style={{ margin: 0 }}>
        These are projects displayed in the projects section on the home page.
        Unlike the landing page projects, they do not need to represent any
        specific category.
      </div>
    );
    let landStat = <div>STATS</div>;
    let landGal = <div>Media</div>;

    return (
      <div>
        <Banner image={AdminBanner} />
        <div className="sec-wrap">
          <Section
            lable="Landing"
            text={landTxt}
            action={<LandAct />}
            media={landGal}
          ></Section>
          <Section
            lable="Featured"
            text={fetTxt}
            action={<FeatAct phrase="Add Project" link="/admin/project" />}
            media={landGal}
          ></Section>
          <SectionGall
            lable="Archive"
            action={<FeatAct phrase="New Project" link="/admin/project" />}
          ></SectionGall>
        </div>
      </div>
    );
  }
}

export default Home;
