import React, { useState, useEffect, useRef } from "react";
import firebase from "../../../firebase";

import Line from "../../Line";
import Dropdown from "../../Dropdown";

const db = firebase.firestore();

const Section = (props) => {
  const [formInfo, setFormInfo] = useState();
  const [info, setInfo] = useState();
  const [time, setRime] = useState();
  const [rend, setRend] = useState();
  const [shots, setShot] = useState();
  const [email, setEmail] = useState();
  const [quote, setQuote] = useState();

  let information = ["Product", "Interior", "Exterior", "Multiple"];
  let timeline = ["2-3 Weeks", "1 Week", "Expedited"];
  let numbers = [0, 1, 2, 3, 4, 5];

  let infoValue = [600, 800, 1000, 1000];
  let timeVal = [1, 1.5, 2];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!info || !time || !rend || !shots || !email)
          return window.alert("Please fill out all fields");

        let entry = {
          information: info,
          timeline: time,
          renderings: rend,
          shorts: shots,
        };
        let currentdate = new Date();

        db.collection("inquiries")
          .doc(email)
          .set(
            {
              [currentdate]: entry,
            },
            { merge: true }
          )
          .then((doc) => {
            let infov = infoValue[information.indexOf(info)];
            let timev = timeVal[timeline.indexOf(time)];
            let newQuote = infov * rend * timev + 50 * shots;

            setQuote(newQuote);
          });
      }}
    >
      <h1>Architectural Rendering</h1>
      <p>
        Wolfe A&D provides photorealistic rendering as a service. Fill out the
        form below to generates a quote.
      </p>
      <div className="rendr-txt-cont">
        <Dropdown
          items={information}
          placeholder="Information"
          selected={info}
          setSelected={setInfo}
        />
        <Dropdown
          items={timeline}
          placeholder="Timeline"
          selected={time}
          setSelected={setRime}
        />
      </div>
      <div className="rendr-txt-cont">
        <Dropdown
          items={numbers}
          placeholder="Scenes"
          selected={rend}
          setSelected={setRend}
        />
        <Dropdown
          items={numbers}
          placeholder="Shots"
          selected={shots}
          setSelected={setShot}
        />
      </div>
      <input
        type="email"
        className="input-input but-line input-cont"
        placeholder="Email address..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="but-fill"
        style={{ marginBottom: "16px" }}
      >
        Submit
      </button>

      <Line width="100px" />
      <p style={{ marginTop: "16px" }} className="title">
        {!quote ? "Quote" : `$${quote}`}
      </p>
      <p style={{ margin: "0" }}>
        {" "}
        {!quote
          ? "Please fill out the Preceding form"
          : "To requests a rendering plase emaill mattwolfe@wolfead.net"}
      </p>
    </form>
  );
};

export default Section;
