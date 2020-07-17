import React, { Component } from "react";
import firebase from "../firebase";

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

import RendrImg from "../media/images/RenderImg.png";
import ServicesImg from "../media/images/Placeholder.png";
import ServBey from "../media/images/servBey.jpg";
import ServRendrImg from "../media/images/serviceRend.jpg";
import AboutImg from "../media/images/Office.png";
import ProfileImg from "../media/images/Profile.png";
import MapImg from "../media/images/Map.png";

const db = firebase.firestore();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servMedia: ServicesImg,
    };
  }

  componentWillMount() {
    db.collection("projects")
      .doc("--STATS--")
      .get()
      .then((doc) => {
        this.setState({
          slides: doc.data().landing,
          featured: doc.data().featured,
        });
      });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    let projects = {};
    db.collection("projects")
      .get()
      .then((doc) => {
        doc.forEach((project) => {
          if (project.id === "--STATS--") return;
          projects[project.id] = project.data();
        });
        this.setState({ projects });
      });
    this.setServMed(0);
  }

  setServMed = (index) => {
    let servMediaArry = [RendrImg, ServicesImg, ServRendrImg, ServBey];

    this.setState({ servMedia: servMediaArry[index] });
  };

  render() {
    return (
      <div>
        <Landing slides={this.state.slides} />
        <div className="sec-wrap">
          <Section
            lable="Services"
            text={<ServiceTxt setMedia={this.setServMed} />}
            media={
              <ServiceMdia
                image={this.state.servMedia}
                specClass="transServImg"
              />
            }
          ></Section>
          <SectionCarousel
            lable="Projects"
            text={<ProjectTxt />}
            action={<ProjectAct />}
            media={
              <ProjectMida
                featured={this.state.featured}
                projects={this.state.projects}
              />
            }
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
            id="contact"
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
