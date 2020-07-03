import React, { Component } from "react";

import "./indexStyle.css";

import Tile from "./Tile";

class Gallery extends Component {
  render() {
    const tileSet = [1, 2, 3, 4, 5, 1, 3, 4, 5, 6, 7, 8];
    const tiles = tileSet.map((tile) => <Tile key={Math.random()} />);

    return <div className="gal-cont spacing">{tiles}</div>;
  }
}

export default Gallery;
