import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import "./indexStyle.css";

const Gallery = props => {
  const history = useHistory();
  const [list, setList] = useState(props.data);
  const [dragging, setDragging] = useState(false);
  const [toDelete, setToDelete] = useState("");

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
                    props.setFeature(id);
                  }}
                >
                  {props.featured && props.featured.includes(id) ? ( //if not includedin
                    <div className="flex-cent">
                      Un-feature
                      <svg
                        fill="#fff"
                        viewBox="0 0 24 24"
                        style={{ margin: 0 }}
                      >
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                      </svg>
                    </div>
                  ) : (
                    <div className="flex-cent">
                      Feature
                      <svg
                        fill="#fff"
                        viewBox="0 0 24 24"
                        style={{ margin: 0 }}
                      >
                        <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
                      </svg>
                    </div>
                  )}
                </button>

                <button
                  className="svg-button-sml"
                  onClick={e => {
                    e.stopPropagation();
                    setToDelete(id);
                  }}
                >
                  <div>Delete</div>
                  <svg fill="#fff" viewBox="0 0 24 24">
                    <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                  </svg>
                  <div
                    className="final-del-tile flex-out"
                    style={{ display: toDelete !== id ? "none" : "flex" }}
                  >
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        props.deleteImg(id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        setToDelete("");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Gallery;
