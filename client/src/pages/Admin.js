import React, { Component } from "react";

import firebase from "../firebase";

import Section from "../comps/SectionCarousel";
import SectionGall from "../comps/SectionGall";

import Banner from "../comps/Banner";
import LandAct from "../comps/SectionCarousel/LandAct";
import FeatAct from "../comps/SectionCarousel/FeatAct";
import ServiceTxt from "../comps/Section/ServText";
import ServiceMdia from "../comps/Section/Media";
import ReorderProjGal from "../comps/ReorderProjGal";

import AdminBanner from "../media/images/AdminBanner.png";

const db = firebase.firestore();
const storageRef = firebase.storage().ref();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      projects: {}
    };
  }

  componentDidMount() {
    let projectsRef = db.collection("projects");
    window.scrollTo(0, 0);
    projectsRef.get().then(doc => {
      let order = this.state.order;
      let projects = this.state.projects;

      doc.forEach(project => {
        if (project.id === "--STATS--") {
          order = project.data().order;
        } else {
          projects[project.id] = project.data();
        }
      });
      this.setState({
        order,
        projects
      });
    });
  }

  changeOrder = order => {
    this.setState({ order });
  };

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
            gallType={
              <ReorderProjGal
                data={this.state.order}
                object={this.state.projects}
                changeData={this.changeOrder}
                setCover={this.setCover}
                deleteImg={this.deleteImg}
              />
            }
          />
        </div>
      </div>
    );
  }
}

export default Home;
