import React, { Component, useState, useEffect, useRef } from "react";

import "./indexStyle.css";

import Tile from "./Tile";

const Gallery = props => {
  const [list, setList] = useState(props.data);
  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragNode = useRef();

  useEffect(() => {
    setList(props.data);
  }, [props.data]);

  const handleDragStart = (e, i) => {
    dragNode.current = e.target;
    dragItem.current = i;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = () => {
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    setDragging(false);
    dragNode.current = null;
    dragItem.current = null;
  };

  const getStyles = i => {
    if (dragItem.current === i) return "act-drag-tile tile-cont";
    return "tile-cont";
  };
  return (
    <div
      className="gal-cont spacing"
      style={{ padding: !props.noMargin ? "16px" : "0" }}
    >
      {!list
        ? ""
        : list.map((image, i) => (
            <div
              draggable
              key={"tileItem" + i}
              className={dragging ? getStyles(i) : "tile-cont"}
              style={{ backgroundImage: `url(${image})` }}
              onDragStart={e => {
                handleDragStart(e, i);
              }}
            >
              <div className="tile-footer">the inde is {i}</div>
            </div>
          ))}
    </div>
  );
};

export default Gallery;
