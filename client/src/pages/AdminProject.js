import React, { Component } from "react";

import firebase from "../firebase";

import Section from "../comps/Section";
import SectionGall from "../comps/SectionGall";

import Banner from "../comps/Banner";
import LandAct from "../comps/SectionCarousel/LandAct";
import FeatAct from "../comps/SectionCarousel/FeatAct";
import AdminProjectTxt from "../comps/Section/AdminProjectTxt";
import ReorderGal from "../comps/ReorderGal";

import AdminBanner from "../media/images/AdminBanner.png";

const db = firebase.firestore();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: AdminBanner,
    };
    this.contentbox = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.getCurrentProject();
  }

  getCurrentProject = () => {
    let projectID = window.location.pathname.split("/")[3];
    console.log(projectID);
    if (!projectID) return;
    var docRef = db.collection("projects").doc(projectID);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const {
            description,
            name,
            location,
            category,
            cover,
            images,
          } = doc.data();
          this.setState({
            name: name,
            type: category,
            location: location,
            description: description,
            cover: cover,
            images: images,
          });
        } else {
          console.log("No such project!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };

  enterInfo = (target) => {
    this.setState({
      [target.id]: target.value,
    });
  };

  // uploadImageAsPromise = imageFile => {
  //   const fullDirectory = this.state.fullDirectory;
  //   return new Promise(function(resolve, reject) {
  //     var storageRef = firebase
  //       .storage()
  //       .ref(fullDirectory + "/" + imageFile.name);
  //
  //     //Upload file
  //     var task = storageRef.put(imageFile);
  //
  //     //Update progress bar
  //     task.on(
  //       "state_changed",
  //       function progress(snapshot) {
  //         var percentage =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         uploader.value = percentage;
  //       },
  //       function error(err) {},
  //       function complete() {
  //         var downloadURL = task.snapshot.downloadURL;
  //       }
  //     );
  //   });
  // };

  submitChanges = (e) => {};
  submitNewProject = (e) => {
    e.preventDefault();
    console.log("running submitChanges");
    const { description, name, location, category, cover, images } = this.state;
    if (!description || !name || !location || !category) {
      console.log("empty field!");
      return;
    }
    db.collection("projects")
      .add({
        name: name,
        type: category,
        location: location,
        description: description,
        dateAdded: Date.now(),
        cover: cover,
        images: images,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
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
              " 0px 15px 25px rgba(0, 0, 0, 0.12), 0px 5px 10px rgba(0, 0, 0, 0.09)",
          }}
        >
          Save Changes
        </button>
      </div>
    );

    return (
      <div>
        <Banner image={cover} text={subButton} />
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
            tileSet={images}
            action={<FeatAct phrase="Add Images" />}
            gallType={<ReorderGal data={images} />}
          ></SectionGall>
        </div>
      </div>
    );
  }
}

export default Home;
