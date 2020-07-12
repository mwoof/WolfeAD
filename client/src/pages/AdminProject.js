import React, { Component } from "react";

import Section from "../comps/Section";
import SectionGall from "../comps/SectionGall";

import Banner from "../comps/Banner";
import LandAct from "../comps/SectionCarousel/LandAct";
import FeatAct from "../comps/SectionCarousel/FeatAct";
import AdminProjectTxt from "../comps/Section/AdminProjectTxt";

import AdminBanner from "../media/images/AdminBanner.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: AdminBanner,
      description: "",
      name: "",
      location: ""
    };
    this.contentbox = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  enterInfo = target => {
    console.log(target.id, target.value);
    this.setState({
      [target.id]: target.value
    });
  };

  render() {
    const { cover, description, name, category, location } = this.state;
    let landTxt = (
      <div style={{ margin: 0 }}>
        These are projects that display on the landing page slideshow. There
        should be one project for each category.
      </div>
    );
    let fetTxt = (
      <div style={{ margin: 0 }}>
        These are projects displayed in the projects section on the home page.
        Unlike the landing page projects, they do not need to represent any
        specific category.
      </div>
    );

    let landGal = <div>Media</div>;

    return (
      <div>
        <Banner image={cover} />
        <div className="sec-wrap">
          <Section
            lable="Landing"
            text={
              <AdminProjectTxt
                enterInfo={this.enterInfo}
                description={description}
                name={name}
                category={category}
                location={location}
              />
            }
            media={<LandAct />}
          ></Section>
          <SectionGall
            lable="Media"
            action={<FeatAct phrase="Add Images" />}
          ></SectionGall>
        </div>
      </div>
    );
  }
}

export default Home;
