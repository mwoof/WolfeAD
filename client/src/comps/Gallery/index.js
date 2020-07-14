import React, { Component } from "react";

import "./indexStyle.css";

import Tile from "./Tile";

class Gallery extends Component {
  render() {
    const tileSet = this.props.array ? this.props.array : [];
    const tiles = tileSet.map((tile, i) => {
      if (this.props.type && tile.data.type !== this.props.type) return;

      return <Tile delay={i * 0.08} key={tile.id} data={tile} />;
    });

    return (
      <div
        className="gal-cont spacing"
        style={{ padding: !this.props.noMargin ? "16px" : "0" }}
      >
        {tiles}
      </div>
    );
  }
}

export default Gallery;
