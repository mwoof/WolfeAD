import React from "react";

import Line from "../../Line";

const Section = props => {
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
        <a
          className="svg-button"
          href="https://www.linkedin.com/in/matt-wolfe-707a005/"
          target="_blank"
        >
          <svg viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
            />
          </svg>
        </a>

        <a
          className="svg-button"
          href="https://www.facebook.com/Wolfe-Architecture-Design-LLC-233371586776750"
          target="_blank"
        >
          <svg fill="none" viewBox="0 0 24 25">
            <path
              fill="#fff"
              d="M20.414 3.781A2 2 0 0019 3.195H5a2 2 0 00-2 2v14a2 2 0 002 2h4.7v-7H7.16v-2.9H9.7v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7H19a2 2 0 002-2v-14a2 2 0 00-.586-1.414z"
            ></path>
          </svg>
        </a>
        <a
          className="svg-button"
          href="https://www.google.com/maps/place/Wolfe+Architecture+%26+Design/@38.6122807,-90.320189,15z/data=!4m2!3m1!1s0x0:0xf072dcaedc44e5e8?sa=X&ved=2ahUKEwjQ-_2m_M_qAhWCiOAKHQZHDsIQ_BIwC3oECBQQCA"
          target="_blank"
        >
          <svg fill="none" viewBox="0 0 24 24">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-6.81 8.446h6.495s.106.467.106 1.282c0 3.84-2.762 6.439-6.552 6.439C7.925 19.167 5 15.66 5 12.083 5 8.4 8.11 5 12.133 5c3.16 0 4.887 1.927 4.887 1.927l-1.345 1.402s-1.283-1.395-3.471-1.395c-2.834 0-5.1 2.245-5.1 5.15 0 3.01 2.38 5.149 5.093 5.149 2.125 0 4.37-1.155 4.604-3.853H12.19v-1.934z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Section;
