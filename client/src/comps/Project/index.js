import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "./indexStyle.css";

import Image1 from "../../media/images/Img1.png";
import Image2 from "../../media/images/Img2.png";
import Image3 from "../../media/images/Img3.png";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true,
      info: false,
      fit: false,
      actImg: 0
    };
    this.contentbox = React.createRef();
  }
  render() {
    const { view, info, fit, actImg } = this.state;

    const imgCar =
      this.props && this.props.images
        ? this.props.images.map((img, i) => (
            <img
              key={Math.random()}
              src={img}
              className={`${actImg !== i ? "" : "act-img-tile"}`}
              onClick={() => this.setState({ actImg: i })}
            ></img>
          ))
        : "";

    return (
      <div className="project-cont flex-cent">
        <div className="button-overlay spacing">
          <div className="proj-but-top flex-cent">
            <button
              className="txt-hlght"
              onClick={() => this.props.history.go(-1)}
            >
              <svg
                width="24px"
                height="24px"
                style={{ marginRight: "8px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                />
              </svg>
              Back
            </button>
            <button className="txt-hlght">Share</button>
            {this.props.authed ? (
              <button
                className="txt-hlght"
                onClick={() =>
                  this.props.history.push(`/admin/project/${this.props.id}`)
                }
              >
                Edit
              </button>
            ) : (
              ""
            )}
          </div>
          <div
            className="proj-but flex-cent"
            style={{ bottom: `${!view ? 0 : "160px"}` }}
          >
            <div>
              <button
                className=""
                onClick={() => this.setState({ info: !info })}
              >
                Project Name
                <svg
                  width="24px"
                  height="24px"
                  style={{ marginLeft: "8px" }}
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M7,15L12,10L17,15H7Z" />
                </svg>
              </button>
              <div className={`info-cont ${!info ? "" : "info-cont-ext"}`}>
                This is a bunch of text
              </div>
            </div>

            <button className="" onClick={() => this.setState({ view: !view })}>
              <svg
                width="24px"
                height="24px"
                style={{ opacity: !view ? 0.5 : 1 }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z"
                />
              </svg>
            </button>
          </div>
          <div
            className="project-img-gal flex-rit"
            style={{ height: `${!view ? "0" : "160px"}` }}
          >
            {imgCar}
          </div>
        </div>

        {this.props && this.props.images ? (
          <img
            className="project-act-img"
            src={this.props.images[actImg]}
            style={{
              height: `${!view ? "100vh" : "Calc(100vh - 160px)"}`,
              objectFit: "contain"
            }}
            alt="WolfeAD Landing Page"
          />
        ) : (
          "loading..."
        )}
      </div>
    );
  }
}

export default withRouter(Project);

// <button onClick={() => this.setState({ fit: !fit })}>
//   <svg
//     style={{ opacity: !fit ? 0.5 : 1 }}
//     width="24px"
//     height="24px"
//     viewBox="0 0 24 24"
//   >
//     <path
//       fill="currentColor"
//       d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z"
//     />
//   </svg>
// </button>
//
