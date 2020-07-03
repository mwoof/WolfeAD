import React, { Component } from "react";
import { withRouter } from "react-router";

import firebase from "../firebase";

import TxtInput from "../comps/TxtInput";
import Logo from "../media/svgs/Logo.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
    };
    this.login = this.login.bind(this);
  }

  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.pass)
      .then((user) => {
        console.log("loged in");
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.email);
    return (
      <div>
        <div className="sec-wrap flex-cent" style={{ height: "100vh" }}>
          <div className="flex-col flex-cent">
            <div style={{ marginBottom: "24px", width: "80%" }}>
              <Logo />
            </div>
            <input
              className="input-input but-line input-cont"
              placeholder="emial..."
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <input
              className="input-input but-line input-cont"
              placeholder="password..."
              type="password"
              value={this.state.pass}
              onChange={(e) => this.setState({ pass: e.target.value })}
            />
            <button onClick={this.login}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
