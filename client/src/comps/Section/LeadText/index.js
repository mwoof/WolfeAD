import React from "react";

import Line from "../../Line";

const Section = (props) => {
  return (
    <div className="rev-sec-txt">
      <h1>Matt Wolfe</h1>
      <p style={{ margin: "0 0 8px 0" }}>Principal & Founder</p>
      <Line width="30%" className="" />
      <p style={{ margin: "32px 0 48px" }}>
        Matt is the founder and a principal of Wolfe Architecture & Design
        headquartered in St. Louis, Missouri. Matt leads each project with a
        team tailored to the client's needs. Each team provides attentive
        personal service ensuring that we meet or exceeds our clients goals.
      </p>

      <p>
        <a className="txt-hlght" href="mailto:mattwolfe@wolfead.net">
          mattwolfe@wolfead.net
        </a>
        <br />
        314-960-0099
      </p>
      <Line width="30%" className="" />
      <div className="flex-rit" style={{ margin: "16px 0 0 -4px" }}>
        <a className="svg-button" href="">
          <svg viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
            />
          </svg>
        </a>

        <a className="svg-button" href="">
          <svg fill="none" viewBox="0 0 24 25">
            <path
              fill="#fff"
              d="M20.414 3.781A2 2 0 0019 3.195H5a2 2 0 00-2 2v14a2 2 0 002 2h4.7v-7H7.16v-2.9H9.7v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7H19a2 2 0 002-2v-14a2 2 0 00-.586-1.414z"
            ></path>
          </svg>
        </a>
        <a className="svg-button" href="">
          <svg fill="none" viewBox="0 0 24 24">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M19 3.068a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2v-14a2 2 0 012-2h14zM7.026 13.887c-.074-.762.016-1.91.229-2.274.1-.168.246-.256.41-.249.106.001.201.038 2.318.97l.618.268c.224.09.36.337.345.617-.014.274-.16.488-.379.547l-.879.3c-1.97.676-2.035.695-2.14.69-.163-.007-.306-.11-.392-.283-.062-.125-.104-.335-.13-.586zm5.008 2.28c-.006 2.208-.01 2.28-.044 2.387a.468.468 0 01-.372.31c-.527.095-2.176-.552-2.52-.988a.56.56 0 01-.12-.286.48.48 0 01.023-.203c.037-.11.099-.196 1.582-2.054l.433-.547c.148-.197.411-.259.656-.158a.566.566 0 01.368.554l-.005.986zm4.96-.632c-.077.567-1.161 2.039-1.658 2.25-.173.074-.338.057-.469-.053-.084-.07-.173-.213-1.342-2.238l-.347-.603a.635.635 0 01.059-.72c.16-.21.399-.29.608-.204.01.006.874.31.874.31 1.97.69 2.033.716 2.116.783.127.108.185.278.159.475zm-.264-3.633c-.088.062-.175.092-2.412.67-.359.092-.556.144-.666.188a.336.336 0 00.011-.02c-.223.066-.467-.05-.611-.285-.14-.227-.138-.492.005-.677l.547-.794c1.198-1.748 1.262-1.84 1.348-1.9.14-.099.308-.105.476-.019.474.248 1.437 1.772 1.494 2.359v.02c.012.198-.056.36-.192.458zm-4.994-6.654c.03.195.298 4.408.336 5.354.037.806-.287.914-.393.948-.107.036-.434.144-.833-.548 0 0-2.705-4.54-2.769-4.68a.532.532 0 01.14-.48c.404-.445 2.587-1.098 3.158-.947.186.05.316.176.36.353z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Section;
