import React, { useState, useEffect, useRef } from "react";

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
  const handleDragEnter = (e, targetItem) => {
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      setList(oldList => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList.splice(targetItem, 0, newList.splice(dragItem.current, 1)[0]);
        dragItem.current = targetItem;
        props.changeData(newList);
        return newList;
      });
    }
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
              className={`${dragging ? getStyles(i) : "tile-cont"} ${
                props.cover !== image ? "" : "tile-cont-cover"
              }`}
              style={{ backgroundImage: `url(${image})` }}
              onDragEnter={dragging ? e => handleDragEnter(e, i) : null}
              onDragStart={e => {
                handleDragStart(e, i);
              }}
            >
              <div className="tile-footer flex-out">
                <button
                  className="svg-button-sml"
                  onClick={e => props.setCover(image)}
                >
                  {props.cover !== image ? (
                    <div>Set as cover</div>
                  ) : (
                    <svg fill="#fff" viewBox="0 0 24 24" style={{ margin: 0 }}>
                      <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" />
                    </svg>
                  )}
                </button>
                <button
                  className="svg-button-sml"
                  onClick={e => props.deleteImg(image)}
                >
                  <div>Delete</div>
                  <svg fill="#fff" viewBox="0 0 24 24">
                    <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Gallery;
