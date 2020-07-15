import React, { Component } from "react";
import _ from "lodash";

import firebase from "../firebase";
import DotGrid from "../comps/grid";

import Section from "../comps/SectionCarousel";
import SectionGall from "../comps/SectionGall";

import Banner from "../comps/Banner";
import LandAct from "../comps/SectionCarousel/LandAct";
import FeatAct from "../comps/SectionCarousel/FeatAct";
import ServiceTxt from "../comps/Section/ServText";
import ServiceMdia from "../comps/Section/Media";
import ReorderProjGal from "../comps/ReorderProjGal";
import ReorderFetGal from "../comps/ReorderFetGal";
import ReorderLandGal from "../comps/ReorderLandGal";

import AdminBanner from "../media/images/AdminBanner.png";

const db = firebase.firestore();
const storageRef = firebase.storage().ref();

const fetureLimit = 3;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      order: [],
      projects: {},
      featured: [],
      landing: []
    };
    this.syncDelay = _.debounce(this.syncDelay, 500);
  }

  componentDidMount() {
    let projectsRef = db.collection("projects");
    window.scrollTo(0, 0);
    projectsRef.get().then(doc => {
      let order = this.state.order;
      let projects = this.state.projects;
      let featured, landing;

      doc.forEach(project => {
        if (project.id === "--STATS--") {
          order = project.data().order;
          featured = project.data().featured;
          landing = project.data().landing;
        } else {
          projects[project.id] = project.data();
        }
      });
      this.setState({
        order,
        projects,
        featured,
        landing,
        loaded: true
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state && prevState.loaded) {
      this.syncDelay();
    }
  }
  syncDelay() {
    this.submitChanges();
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
      if (featured.length >= fetureLimit) {
        let array = this.state.featured;
        let newAddition = featured.filter(x => !array.includes(x));
        array = array.slice(0, fetureLimit - 1);
        array.unshift(id);
        return this.setState({ featured: array });
      }
      featured.push(id); //i think this is wrong. you need to ad id to the current array then set state
    }
    this.setState({ featured });
  };
  changeFetOrder = featured => {
    this.setState({ featured });
  };
  setLanding = landing => {
    this.setState({ landing });
  };
  removeFeature = id => {
    let array = this.state.featured;
    let index = array.indexOf(id);
    array.splice(index, 1);
    this.setState({ featured: array });
  };

  deleteImg = id => {
    //remove it from order
    let order = this.state.order;
    var index = order.indexOf(id);
    if (index !== -1) {
      order.splice(index, 1);
      this.setState({ order });
    }
    //remove it form featured
    let featured = this.state.featured;
    var index = featured.indexOf(id);
    if (index !== -1) {
      featured.splice(index, 1);
      this.setState({ featured });
    }
    //remove it from firebase
    db.collection("projects")
      .doc(id)
      .delete();
  };

  submitChanges = () => {
    console.log("saving changes");
    db.collection("projects")
      .doc("--STATS--")
      .set({
        order: this.state.order,
        featured: this.state.featured,
        landing: this.state.landing
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  };

  render() {
    let landTxt = (
      <div style={{ margin: 0 }}>
        These are pictures that display in the landing page slideshow. You can
        change the image and order of each category.
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
          <SectionGall
            lable="Landing"
            text={landTxt}
            action={<LandAct />}
            gallType={
              <ReorderLandGal
                noMargin={true}
                data={this.state.landing}
                changeData={this.setLanding}
              />
            }
          ></SectionGall>
          <SectionGall
            lable="Featured"
            text={fetTxt}
            action={
              <FeatAct
                phrase={`${this.state.featured.length}/${fetureLimit}`}
              />
            }
            gallType={
              <ReorderFetGal
                noMargin={true}
                data={this.state.featured}
                object={this.state.projects}
                changeData={this.changeFetOrder}
                setFeature={this.setFeature}
                deleteImg={this.deleteImg}
                removeFeature={this.removeFeature}
              />
            }
          ></SectionGall>
          <SectionGall
            lable="Archive"
            action={<FeatAct phrase="New Project" link="/admin/project" />}
            gallType={
              <ReorderProjGal
                noMargin={true}
                data={this.state.order}
                featured={this.state.featured}
                object={this.state.projects}
                changeData={this.changeOrder}
                setFeature={this.setFeature}
                deleteImg={this.deleteImg}
              />
            }
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
