import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import firebase from "./firebase";

import "./App.css";

import Header from "./comps/header";
import SideNav from "./comps/header/SideNav";
import Footer from "./comps/footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Rendering from "./pages/Rendering";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import AdminProject from "./pages/AdminProject";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNav: false,
      headHeight: true,
      authed: false
    };
  }
  componentWillMount() {
    this.authListener();
  }
  componentDidMount() {
    window.addEventListener("scroll", this.setHead, false);
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.setHead, false);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    window.innerWidth > 768 && this.setState({ sideNav: false });
  };
  openSideNav = () => {
    this.setState({
      sideNav: !this.state.sideNav
    });
  };
  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return this.setState({ authed: true });
      }
      this.state.authed && this.setState({ authed: false });
    });
  };

  render() {
    const { sideNav, headHeight, authed } = this.state;

    return (
      <Router>
        <Header
          openSideNav={this.openSideNav}
          sideNav={sideNav}
          height={headHeight}
          authed={authed}
        />
        <div className="content-cont">
          <div className={`content-wrap ${sideNav ? "cont-act-sidNav" : ""}`}>
            <div className={`${sideNav ? "body-act-sidNav" : ""}`}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  path="/projects/project/:ProjectName"
                  component={Project}
                />
                <Route path="/projects" component={Projects} />
                <Route path="/rendering" component={Rendering} />
                <Route path="/admin/project" component={AdminProject} />
                <Route exact path="/admin" component={Admin} />
                <Route path="/login" component={Login} />
              </Switch>
            </div>
            <div></div>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
// /    render={() => <Project authed={authed} />}
