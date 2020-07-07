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
          "Wolfe A&D provides full architectural services from feasibility studies, concept generation through move in.",
      },
      {
        title: "Programming & Pre-Design",
        content:
          "Wolfe A&D helps clients set the parameters for the design process; defining budgets, schedules, special programing and goals",
      },
      {
        title: "Progect Rendering",
        content:
          "Wolfe A&D provides rendering services to both clients and other architects looking to spruce up presentations and other project media.",
      },
      {
        title: "Beyond Design Services",
        content:
          "In addition to the traditional Architectural Services, Wolfe A&D can assist clients with project promotions and fundraising.",
      },
    ];

    let contentComps = content.map((item, i) => (
      <div
        onClick={() => this.setState({ actItm: i })}
        className="serv-txt-cont"
        key={Math.random()}
      >
        <h1>{item.title}</h1>
        <h2
          className={`serv-itm-txt ${actItm !== i ? "" : "serv-itm-txt-act"}`}
        >
          {item.content}
        </h2>
        <Line width={actItm !== i ? "20%" : "60%"} className="serv-div" />
      </div>
    ));

    return <div>{contentComps}</div>;
  }
}

export default Section;
