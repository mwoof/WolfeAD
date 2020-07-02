import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./comps/header";
import SideNav from "./comps/header/SideNav";
import Footer from "./comps/footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Rendering from "./pages/Rendering";
import Admin from "./pages/Admin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNav: false,
      headHeight: true,
    };
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
  // setHead = () => {
  //   const { headHeight } = this.state;
  //   headHeight &&
  //     window.pageYOffset > 3 &&
  //     this.setState({ headHeight: false });
  //   !headHeight &&
  //     window.pageYOffset <= 3 &&
  //     this.setState({ headHeight: true });
  // };
  openSideNav = () => {
    this.setState({
      sideNav: !this.state.sideNav,
    });
  };

  render() {
    const { sideNav, headHeight } = this.state;

    return (
      <Router>
        <Header
          openSideNav={this.openSideNav}
          sideNav={sideNav}
          height={headHeight}
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
                <Route path="/admin" component={Admin} />
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
