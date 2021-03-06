import React from "react";

import "./indexStyle.css";

import Tile from "./Tile";

// class Gallery extends Component {
//   render() {
const Gallery = props => {
  const tileSet = props.array ? props.array : [];
  const tiles = tileSet.map((tile, i) => {
    // console.log(tile.data.type.replace(" ", ""));
    if (
      props.srch &&
      tile.data.name.toLowerCase().indexOf(props.srch.toLowerCase()) < 0
    )
      return;
    if (
      props.type &&
      tile.data.type &&
      tile.data.type.replace(/ /g, "") !== props.type.replace(/ /g, "")
    )
      return; //filter type

    return (
      <Tile
        view={props.view}
        noLink={props.noLink}
        delay={i * 0.08}
        key={tile.id}
        data={tile}
      />
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
