import React, { Component } from "react";
import firebase from "../firebase";

import Section from "../comps/Section";
import SectionGall from "../comps/SectionGall";
import DotGrid from "../comps/grid";

import Banner from "../comps/Banner";
// import ServiceTxt from "../comps/Section/ServText";
import RendrTxt from "../comps/Section/RenderTxt";
import ServiceMdia from "../comps/Section/Media";

import RendrImg from "../media/images/RenderImg.png";
import RenderBanner from "../media/images/RenderBanner.png";

const db = firebase.firestore();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    let projectsRef = db.collection("renderings");
    window.scrollTo(0, 0);
    projectsRef.get().then(doc => {
      let projects = [];
      doc.forEach(project => {
        let projObj = {
          id: project.id,
          data: project.data()
        };
        projects.push(projObj);
      });

      this.setState({
        projects
      });
    });
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
          <SectionGall lable="Archive" items={this.state.projects} />
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
