import React, { Component } from "react";

import "./indexStyle.css";

import Line from "../../Line";

// const Section = (props) => {
class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actItm: 0,
    };
  }

  render() {
    const { actItm } = this.state;
    const content = [
      {
        title: "Architectural Services",
        content:
          "Wolfe A&D provides a full architectural service: pre-design, programming, feasibility studies, concept generation, construction documentation through move in.",
      },
      {
        title: "Industrial Design",
        content:
          "Wolfe A&D works with clients to develop products with aesthetics, ease of manufacturing and sourcing in mind",
      },
      {
        title: "Project Renderings",
        content:
          "Wolfe A&D provides rendering services to both clients and other architects looking to spruce up presentations and other project media.",
      },
      {
        title: "Beyond Design Services",
        content:
          "In addition to architectural and design services, Wolfe A&D can assist clients with project promotions and fundraising.",
      },
    ];

    let contentComps = content.map((item, i) => (
      <div
        onClick={() => {
          this.props.setMedia(i);
          this.setState({ actItm: i });
        }}
        className="serv-txt-cont"
        key={Math.random()}
      >
        <h1
          className={`h1-sec-txt ${actItm !== i ? "" : "h1-active-sec-txt "}`}
        >
          {item.title}
        </h1>
        <h2
          className={`serv-itm-txt ${actItm !== i ? "" : "serv-itm-txt-act"}`}
        >
          {item.content}
        </h2>
        <Line width={actItm !== i ? "40px" : "120px"} className="serv-div" />
      </div>
    ));

    return <div>{contentComps}</div>;
  }
}

export default Section;
