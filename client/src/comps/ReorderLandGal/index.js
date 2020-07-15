import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import firebase from "../../firebase";

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

  // Filie upload-------------------------------
  const storageRef = firebase.storage().ref();

  const fileuploadHandler = event => {
    const type = event.target.id.replace("type-", ""); //the type of the file
    const files = Array.from(event.target.files);
    files.forEach(file => {
      storageRef
        .child(`landingPage/wolfeAD-cover-${type}`)
        .put(file)
        .then(snapshot => {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log("upload complete");
            // props.changeData(list);
            let newLanding = JSON.parse(JSON.stringify(list));
            let index = newLanding.findIndex(x => x.value === type);
            newLanding[index].image = downloadURL;
            props.changeData(newLanding);
          });
        });
    });
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
        : list.map((img, i) => (
            <div
              draggable
              key={"ProjectTile" + i}
              className={`${dragging ? getStyles(i) : "tile-cont"}`}
              style={{ backgroundImage: `url(${img.image})` }}
              onDragEnter={dragging ? e => handleDragEnter(e, i) : null}
              onDragStart={e => {
                handleDragStart(e, i);
              }}
            >
              <div
                className="tile-footer flex-out txt-hlght "
                style={{
                  textTransform: "capitalize",
                  padding: "4px 4px  4px  12px"
                }}
              >
                {img.type}
                <button
                  className="svg-button-sml"
                  onClick={e => {
                    const fileInput = document.getElementById(
                      `type-${img.value}`
                    );
                    fileInput.click();
                  }}
                >
                  <svg fill="#fff" viewBox="0 0 24 24">
                    <path d="M22.7 14.3L21.7 15.3L19.7 13.3L20.7 12.3C20.8 12.2 20.9 12.1 21.1 12.1C21.2 12.1 21.4 12.2 21.5 12.3L22.8 13.6C22.9 13.8 22.9 14.1 22.7 14.3M13 19.9V22H15.1L21.2 15.9L19.2 13.9L13 19.9M21 5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11V19.1L12.1 18H5L8.5 13.5L11 16.5L14.5 12L16.1 14.1L21 9.1V5Z" />{" "}
                  </svg>
                </button>
                <input
                  id={`type-${img.value}`}
                  type="file"
                  accept="image/*"
                  onChange={fileuploadHandler}
                  style={{
                    display: "none"
                  }}
                />
              </div>
            </div>
          ))}
    </div>
  );
};

export default Gallery;
