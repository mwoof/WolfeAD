import React, { Component } from "react";
import _ from "lodash";

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

const fetureLimit = 4;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      order: [],
      projects: {},
      featured: []
    };
    this.syncDelay = _.debounce(this.syncDelay, 500);
  }

  componentDidMount() {
    let projectsRef = db.collection("projects");
    window.scrollTo(0, 0);
    projectsRef.get().then(doc => {
      let order = this.state.order;
      let projects = this.state.projects;
      let featured;

      doc.forEach(project => {
        if (project.id === "--STATS--") {
          order = project.data().order;
          featured = project.data().featured;
        } else {
          projects[project.id] = project.data();
        }
      });
      this.setState({
        order,
        projects,
        featured,
        loaded: true
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state && prevState.loaded) {
      this.syncDelay();
    }
  }

  changeOrder = order => {
    this.setState({ order });
  };
  setFeature = id => {
    let featured = this.state.featured ? this.state.featured : [];
    let toggleCheck = featured.indexOf(id);
    if (toggleCheck !== -1) {
      featured.splice(toggleCheck, 1);
    } else {
      if (featured.length > fetureLimit) return;
      featured.push(id);
    }

    this.setState({ featured });
  };

  syncDelay() {
    this.submitChanges();
  }

  submitChanges = () => {
    console.log("saving changes");
    db.collection("projects")
      .doc("--STATS--")
      .set({
        order: this.state.order,
        featured: this.state.featured
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
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
            action={
              <FeatAct
                phrase={`${this.state.featured.length}/${fetureLimit}`}
              />
            }
            media={landGal}
          ></Section>
          <SectionGall
            lable="Archive"
            action={<FeatAct phrase="New Project" link="/admin/project" />}
            gallType={
              <ReorderProjGal
                data={this.state.order}
                featured={this.state.featured}
                object={this.state.projects}
                changeData={this.changeOrder}
                setFeature={this.setFeature}
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
