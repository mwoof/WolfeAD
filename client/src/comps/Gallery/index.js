import React from "react";

import "./indexStyle.css";

import Tile from "./Tile";

// class Gallery extends Component {
//   render() {
const Gallery = props => {
  const tileSet = props.array ? props.array : [];
  const tiles = tileSet.map((tile, i) => {
    if (props.type && tile.data.type !== props.type) return;
    return (
      <Tile view={props.view} delay={i * 0.08} key={tile.id} data={tile} />
    );
  });

  return (
    <div
      className="gal-cont spacing"
      style={{ padding: !props.noMargin ? "16px" : "0" }}
    >
      {tiles}
    </div>
  );
};

export default Gallery;
