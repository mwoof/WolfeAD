import React, { Component } from "react";

//Styling
// import "./BannerStyle.css";
import Section from "../comps/Section";

import Landing from "../comps/Home/Landing";
import ServiceTxt from "../comps/Section/ServiceTxt";
import ServiceMdia from "../comps/Section/ServiceMdia";

import ServicesImg from "../media/images/Placeholder.png";
import AboutImg from "../media/images/Office.png";
import Profile from "../media/images/Profile.png";

class Home extends Component {
  render() {
    return (
      <div>
        <Landing />
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
        <Section
          lable="Leadership"
          media={<ServiceTxt />}
          text={<ServiceMdia image={Profile} />}
        />
        <Section lable="Contact" />
      </div>
    );
  }
}

export default Home;
