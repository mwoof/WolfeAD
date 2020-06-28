import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./comps/header";
import SideNav from "./comps/header/SideNav";
import Footer from "./comps/footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Rendering from "./pages/Rendering";
import Admin from "./pages/Admin";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideNav: false
    };
  }

  openSideNav = () => {
    this.setState({
      sideNav: !this.state.sideNav
    });
  };

  render() {
    return (
      <Router>
        <Header openSideNav={this.openSideNav} />
        <div
          className="content-cont"
          style={{
            gridTemplateColumns: `100% ${this.state.sideNav ? "200px" : 0}`,
            marginLeft: `${this.state.sideNav ? "-200px" : 0}`
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/rendering" component={Rendering} />
            <Route path="/admin" component={Admin} />
          </Switch>
          <SideNav />
        </div>

        <Footer />
      </Router>
    );
  }
}

export default App;
