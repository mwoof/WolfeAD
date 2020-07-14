import React, { Component } from "react";

import firebase from "../firebase";

import Filter from "../comps/Filter";
import Gallery from "../comps/Gallery";
import DotGrid from "../comps/grid";

const db = firebase.firestore();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    let projectsRef = db.collection("projects");
    window.scrollTo(0, 0);
    projectsRef.get().then(doc => {
      let order = [];
      let projects = {};

      doc.forEach(project => {
        console.log(project.id);
        if (project.id === "--STATS--") return (order = project.data().order);
        projects[project.id] = project.data();
      });

      this.orderProjects(projects, order);
    });
  }
  orderProjects = (prjectObj, orderArr) => {
    let projects = [];
    orderArr.forEach(id => {
      let projObj = {
        id: id,
        data: prjectObj[id]
      };
      projects.push(projObj);
    });
    this.setState({ projects });
  };

  render() {
    const tabs = [
      {
        title: "All Projects",
        link: ""
      },
      {
        title: "Commercial",
        link: "commercial"
      },
      {
        title: "Institutional",
        link: "institutional"
      },
      {
        title: "Residential",
        link: "residential"
      },
      {
        title: "On The Boards",
        link: "boards"
      }
    ];

    return (
      <div>
        <Filter tabs={tabs} />
        <Gallery array={this.state.projects} />
        <div className="grid-wrapper flex-cent">
          <div className="spacing" style={{ height: "100%" }}>
            <DotGrid top="10%" left="-66px" />
            <DotGrid top="40%" right="-66px" />
            <DotGrid top="70%" left="-66px" />
            <DotGrid top="98%" right="-66px" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
