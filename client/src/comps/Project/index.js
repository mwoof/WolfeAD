import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "./indexStyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const settings = {
      dots: false,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      infinite: false,
      slidesToScroll: 1,
      variableWidth: true
    };

    const imgCar =
      this.props && this.props.images
        ? this.props.images.map((img, i) => (
            <div>
              <img
                key={Math.random()}
                src={img}
                className={`${actImg !== i ? "" : "act-img-tile"}`}
                onClick={() => this.setState({ actImg: i })}
              ></img>
            </div>
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
            style={{
              height: `${!view ? "0" : "160px"}`,
              display: `${!view ? "none" : "flex"}`
            }}
          >
            <Slider {...settings} className="">
              {imgCar}
            </Slider>
          </div>
        </div>

        {this.props && this.props.images ? (
          <div
            className="project-act-img flex-cent flex-col"
            style={{
              height: `${!view ? "100vh" : "Calc(100vh - 160px)"}`
            }}
          >
            <img
              className="img-shadow"
              src={this.props.images[actImg]}
              style={{
                objectFit: "contain"
              }}
              alt="WolfeAD Landing Page"
            />
          </div>
        ) : (
          "loading..."
        )}
      </div>
    );
  }
}

export default withRouter(Project);
