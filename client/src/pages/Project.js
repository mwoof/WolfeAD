import React, { Component } from "react";
import firebase from "../firebase";

import Project from "../comps/Project";
import DotGrid from "../comps/grid";

const db = firebase.firestore();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authed: false };
  }
  componentWillMount() {
    const currentPath = this.props.location.pathname;
    let id = currentPath.split("/")[3];
    this.getProject(id);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.authListener();
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return this.setState({ authed: true });
      }
      this.state.authed && this.setState({ authed: false });
    });
  };

  getProject = id => {
    db.collection("projects")
      .doc(id)
      .get()
      .then(doc => {
        const { description, images, location, name, type } = doc.data();
        this.setState({ description, images, location, name, type, id });
      });
  };

  render() {
    console.log(this.props.authed);
    return (
      <div>
        <Project
          images={this.state.images}
          authed={this.state.authed}
          id={this.state.id}
        />
        <div className="grid-wrapper flex-cent">
          <div className="spacing" style={{ height: "100%" }}>
            <DotGrid top="75%" right="-66px" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
