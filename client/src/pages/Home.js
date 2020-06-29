import React, { Component } from "react";

import Section from "../comps/Section";
import SectionRev from "../comps/SectionRev";

import Landing from "../comps/Home/Landing";
import ServiceTxt from "../comps/Section/Text";
import ServiceMdia from "../comps/Section/Media";
import SecRevMdia from "../comps/SectionRev/Media";

import ServicesImg from "../media/images/Placeholder.png";
import AboutImg from "../media/images/Office.png";
import ProfileImg from "../media/images/Profile.png";
import MapImg from "../media/images/Map.png";

class Home extends Component {
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
          <Section lable="Projects" />
          <Section
            lable="About"
            text={<ServiceTxt />}
            media={<ServiceMdia image={AboutImg} />}
          />
          <SectionRev
            lable="Leadership"
            media={<ServiceTxt />}
            text={<SecRevMdia image={ProfileImg} />}
          />
          <Section
            lable="Contact"
            text={<ServiceTxt />}
            media={<ServiceMdia image={MapImg} />}
          />
        </div>
      </div>
    );
  }
}

export default Home;
