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
          <div className="proj-but-top proj-but-foot flex-cent">
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
            {!this.props.name ? (
              ""
            ) : (
              <a
                href={`mailto:?cc=&bcc=&subject=${this.props.name.replace(
                  " ",
                  "%20"
                )}&body=Take%20a%20look%20at%20the%20${this.props.name.replace(
                  " ",
                  "%20"
                )}%20by%20Wolfe%20AD:%20http://wolfead.net/projects/project/${
                  this.props.id
                }`}
              >
                <button className="txt-hlght">Share</button>
              </a>
            )}
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
            <div className="proj-but-foot">
              <button
                className=""
                onClick={() => this.setState({ info: !info })}
              >
                <div className={"txt-hlght"}> {this.props.name}</div>

                <svg
                  width="24px"
                  height="24px"
                  style={{
                    marginLeft: "8px",
                    transform: !info ? "" : "rotate(180deg)"
                  }}
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M7,15L12,10L17,15H7Z" />
                </svg>
              </button>
              <div className={`info-cont ${!info ? "" : "info-cont-ext"}`}>
                <div className="flex-rit">
                  <div
                    className={"txt"}
                    style={{ textTransform: "capitalize", marginRight: "8px" }}
                  >
                    {this.props.type}
                  </div>
                  <div className={"txt"}>{`| ${this.props.spot}`}</div>
                </div>

                <div className={"nav-txt"}> {this.props.description}</div>
              </div>
            </div>
            <div className="proj-but-foot">
              <button
                className=""
                onClick={() => this.setState({ view: !view })}
              >
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
            <div
              className="land-nav-arr flex-cent"
              style={{ left: 0 }}
              onClick={() => {
                let newIndex = actImg - 1;
                let last = this.props.images.length - 1;
                this.setState({
                  actImg: newIndex < 0 ? last : newIndex
                });
              }}
            >
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                />
              </svg>
            </div>
            <div
              className="land-nav-arr flex-cent"
              style={{ right: 0 }}
              onClick={() => {
                let newIndex = actImg + 1;
                let last = this.props.images.length - 1;
                this.setState({
                  actImg: newIndex > last ? 0 : newIndex
                });
              }}
            >
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  transform: `rotate(180deg)`
                }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                />
              </svg>
            </div>

            <img
              className=""
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
