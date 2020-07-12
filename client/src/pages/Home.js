import React, { Component } from "react";

import Section from "../comps/Section";
import SectionRev from "../comps/SectionRev";
import SectionCarousel from "../comps/SectionCarousel";
import DotGrid from "../comps/grid";

import Landing from "../comps/Home/Landing";
import ServiceTxt from "../comps/Section/ServText";
import ContactTxt from "../comps/Section/ContText";
import LeadTxt from "../comps/Section/LeadText";
import AboutTxt from "../comps/Section/AboutText";
import ProjectTxt from "../comps/SectionCarousel/ProjectText";
import ProjectAct from "../comps/SectionCarousel/ProjectAct";
import ServiceMdia from "../comps/Section/Media";
import SecRevMdia from "../comps/SectionRev/Media";
import ProjectMida from "../comps/SectionCarousel/ProjectMedia";

import ServicesImg from "../media/images/Placeholder.png";
import AboutImg from "../media/images/Office.png";
import ProfileImg from "../media/images/Profile.png";
import MapImg from "../media/images/Map.png";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Landing />
        <div className="sec-wrap">
          <Section
            lable="Services"
            text={<ServiceTxt />}
            media={<ServiceMdia image={ServicesImg} />}
          ></Section>
          <SectionCarousel
            lable="Projects"
            text={<ProjectTxt />}
            action={<ProjectAct />}
            media={<ProjectMida image={ProfileImg} />}
            image={ServicesImg}
          />
          <Section
            lable="About"
            text={<AboutTxt />}
            media={<ServiceMdia image={AboutImg} />}
          />
          <SectionRev
            lable="Founder"
            media={<LeadTxt />}
            text={<SecRevMdia image={ProfileImg} />}
          />
          <Section
            lable="Contact"
            text={<ContactTxt />}
            media={<ServiceMdia image={MapImg} />}
          />
          <div className="grid-wrapper flex-cent">
            <div className="spacing" style={{ height: "100%" }}>
              <DotGrid top="8%" left="-66px" />
              <DotGrid top="36%" right="-66px" />
              <DotGrid top="57%" left="-66px" />
              <DotGrid top="78%" right="-66px" />
              <DotGrid top="96%" left="-66px" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
