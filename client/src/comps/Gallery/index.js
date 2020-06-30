import React, { Component } from "react";

import "./indexStyle.css";

import Tile from "./Tile";

class Gallery extends Component {
  render() {
    const tileSet = [1, 2, 3, 4, 5];
    const tiles = tileSet.map((tile) => <Tile />);

    return <div className="gal-cont spacing">{tiles}</div>;
  }
}

export default Gallery;
