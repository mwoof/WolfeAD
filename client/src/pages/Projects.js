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
      projects: [],
      TypeFilter: "",
      SortFilt: "",
      view: true
    };
  }
  componentDidMount() {
    let projectsRef = db.collection("projects");
    window.scrollTo(0, 0);

    projectsRef.get().then(doc => {
      let order = [];
      let projects = {};
      this.pathFilter();
      doc.forEach(project => {
        if (project.id === "--STATS--") return (order = project.data().order);
        projects[project.id] = project.data();
      });

      this.orderProjects(projects, order);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.pathFilter();
    }
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
    this.pathFilter();
  };
  pathFilter() {
    const currentPath = this.props.location.pathname;
    const type = currentPath.replace("/projects", "").replace("/", "");
    this.setState({ TypeFilter: type });
  }

  render() {
    const tabs = [
      "All Projects",
      "Commercial",
      "Institutional",
      "Residential",
      "On The Boards"
    ];
    console.log(this.state.projects, this.state.TypeFilter);

    return (
      <div>
        <Filter
          tabs={tabs}
          view={this.state.view}
          setView={e => this.setState({ view: !this.state.view })}
        />
        <Gallery
          array={this.state.projects}
          type={this.state.TypeFilter}
          view={this.state.view}
        />

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
