import React, { Component, createRef } from "react";
import _ from "lodash";

import firebase from "../firebase";

import Section from "../comps/Section";
import SectionGall from "../comps/SectionGall";

import Banner from "../comps/Banner";
import LandAct from "../comps/SectionCarousel/LandAct";
import FeatActAction from "../comps/SectionCarousel/FeatActAction";
import AdminProjectTxt from "../comps/Section/AdminProjectTxt";
import ReorderGal from "../comps/ReorderGal";

import NewProgBan from "../media/images/NewProgBan.png";

const db = firebase.firestore();
const storageRef = firebase.storage().ref();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      cover: NewProgBan,
      images: []
    };
    this.contentbox = React.createRef();
    this.syncDelay = _.debounce(this.syncDelay, 1500);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.getCurrentProject();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state && prevState.loaded) {
      console.log("starting");
      this.syncDelay();
    }
  }

  syncDelay() {
    this.submitChanges();
  }

  getCurrentProject = () => {
    let projectID = window.location.pathname.split("/")[3];
    if (!projectID) return this.setState({ loaded: true });
    var docRef = db.collection("projects").doc(projectID);

    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          const {
            description,
            name,
            location,
            type,
            cover,
            images
          } = doc.data();
          this.setState({
            loaded: true,
            id: doc.id,
            name: name,
            category: type,
            location: location,
            description: description,
            cover: cover,
            images: images
          });
        } else {
          console.log("No such project!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  };
  addImgTrigger = () => {
    const fileInput = document.getElementById("file");
    fileInput.click();
  };
  enterInfo = target => {
    this.setState({
      [target.id]: target.value
    });
  };
  setCover = img => {
    this.setState({ cover: img });
  };
  deleteImg = imgUrl => {
    let imgId = imgUrl.substring(
      imgUrl.lastIndexOf("FwolfeAD-") + 1,
      imgUrl.lastIndexOf("?alt")
    );
    let desertRef = storageRef.child(`projects/${imgId}`);

    desertRef
      .delete()
      .then(() => {
        let newArr = this.state.images;
        let index = newArr.indexOf(imgUrl);
        newArr.splice(index, 1);
        this.setState({ images: newArr });
      })
      .catch(error => {
        console.log(error);
      });
  };
  changeImgList = list => {
    this.setState({
      images: list
    });
  };
  fileuploadHandler = event => {
    const { images } = this.state;
    const files = Array.from(event.target.files);
    files.forEach(file => {
      storageRef
        .child(`projects/wolfeAD-${Math.random()}`)
        .put(file)
        .then(snapshot => {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            images.push(downloadURL);
            console.log(images);
            this.setState({ images });
          });
        });
    });
  };

  submitChanges = e => {
    console.log("submitting changes");
    const {
      description,
      name,
      location,
      category,
      cover,
      images,
      id
    } = this.state;

    console.log();
    if (!description || !name || !location || !category) {
      console.log("You cannot have empty fields!");
      return;
    }

    let payload = {
      name: name,
      type: category,
      location: location,
      description: description,
      cover: cover,
      images: images
    };

    if (id) {
      console.log("changing ", id, " prohect");
      return db
        .collection(`projects`)
        .doc(id)
        .set(payload)
        .catch(error => {
          console.error("Error writing document: ", error);
        });
    }
    console.log("adding new project");
    payload.dateAdded = Date.now();
    db.collection("projects")
      .add(payload)
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  render() {
    const { cover, description, name, category, location, images } = this.state;
    let landTxt = (
      <div style={{ margin: 0 }}>
        These are projects that display on the landing page slideshow. There
        should be one project for each category.
      </div>
    );
    let fetTxt = (
      <div style={{ margin: 0 }}>
        These are projects displayed in the projects section on the home page.
        Unlike the landing page projects, they do not need to represent any
        specific category.
      </div>
    );

    let landGal = <div>Media</div>;
    let subButton = (
      <div style={{ width: "100%" }} className="flex-lft">
        <button
          onClick={this.submitChanges}
          style={{
            background: "#EE1C25",
            boxShadow:
              " 0px 15px 25px rgba(0, 0, 0, 0.12), 0px 5px 10px rgba(0, 0, 0, 0.09)"
          }}
        >
          Save Changes
        </button>
      </div>
    );

    return (
      <div>
        <Banner image={cover} />
        <div className="sec-wrap">
          <Section
            lable="Landing"
            text={
              <AdminProjectTxt
                enterInfo={this.enterInfo}
                description={description}
                name={name}
                category={category}
                location={location}
                submitChanges={this.submitChanges}
              />
            }
            media={<LandAct />}
          ></Section>

          <SectionGall
            lable="Media"
            action={
              <FeatActAction phrase="Add Images" action={this.addImgTrigger} />
            }
            gallType={
              <ReorderGal
                data={images}
                changeData={this.changeImgList}
                cover={cover}
                setCover={this.setCover}
                deleteImg={this.deleteImg}
              />
            }
          ></SectionGall>
        </div>
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={this.fileuploadHandler.bind(this)}
          multiple
          style={{ display: "none" }}
        />
      </div>
    );
  }
}

export default Home;
