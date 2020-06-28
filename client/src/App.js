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
  constructor(props) {
    super(props);
    this.state = {
      sideNav: false,
      headHeight: 56,
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
  setHead = () => {
    const { headHeight } = this.state;
    headHeight !== 48 &&
      window.pageYOffset > 3 &&
      this.setState({ headHeight: 48 });
    headHeight !== 56 &&
      window.pageYOffset <= 3 &&
      this.setState({ headHeight: 56 });
  };
  openSideNav = () => {
    this.setState({
      sideNav: !this.state.sideNav,
    });
  };

  render() {
    const { sideNav, headHeight } = this.state;

    return (
      <Router>
        <Header openSideNav={this.openSideNav} height={headHeight} />
        <div className="content-cont">
          <div className={`content-wrap ${sideNav ? "cont-act-sidNav" : ""}`}>
            <div className={`${sideNav ? "body-act-sidNav" : ""}`}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/rendering" component={Rendering} />
                <Route path="/admin" component={Admin} />
              </Switch>
            </div>
            <SideNav />
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
