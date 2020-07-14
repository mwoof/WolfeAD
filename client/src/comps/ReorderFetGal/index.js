import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import "./indexStyle.css";

const Gallery = props => {
  const history = useHistory();
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
      style={{
        padding: !props.noMargin ? "16px" : "0",
        marginBottom: 0
      }}
    >
      {!list
        ? ""
        : list.map((id, i) => (
            <div
              draggable
              key={"ProjectTile" + i}
              className={`${dragging ? getStyles(i) : "tile-cont"} ${
                props.featured && props.featured.includes(id)
                  ? "tile-cont-cover"
                  : ""
              }`}
              style={{ backgroundImage: `url(${props.object[id].cover})` }}
              onClick={e => history.push(`/admin/project/${id}`)}
              onDragEnter={dragging ? e => handleDragEnter(e, i) : null}
              onDragStart={e => {
                handleDragStart(e, i);
              }}
            >
              <div className="tile-footer flex-out">
                <button
                  className="svg-button-sml"
                  onClick={e => {
                    e.stopPropagation();
                    props.removeFeature(id);
                  }}
                >
                  <div>Remove</div>
                  <svg fill="#fff" viewBox="0 0 24 24">
                    <path d="M5 3C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H14.09C14.03 20.67 14 20.34 14 20C14 19.32 14.12 18.64 14.35 18H5L8.5 13.5L11 16.5L14.5 12L16.73 14.97C17.7 14.34 18.84 14 20 14C20.34 14 20.67 14.03 21 14.09V5C21 3.89 20.1 3 19 3H5M16.47 17.88L18.59 20L16.47 22.12L17.88 23.54L20 21.41L22.12 23.54L23.54 22.12L21.41 20L23.54 17.88L22.12 16.46L20 18.59L17.88 16.47L16.46 17.88Z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Gallery;
