import React from "react";

import Line from "../../Line";

const Section = (props) => {
  return (
    <div>
      <h1>Office</h1>
      <p>
        7412 Manchester Rd <br />
        St. Louis Missouri 63143
      </p>
      <p>
        <a className="txt" href="mailto:mattwolfe@wolfead.net">
          mattwolfe@wolfead.net
        </a>
        <br />
        314-960-0099 <br /> <br />
      </p>

      <h1>Employment</h1>
      <p>
        To apply for a job with Wolfe A&D, please send a resume and contact
        information to: mattwolfe@wolfead.net
      </p>
    </div>
  );
};

export default Section;
