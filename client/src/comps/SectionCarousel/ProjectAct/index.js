import React from "react";
import { NavLink } from "react-router-dom";

const Section = (props) => {
  return (
    <div className="flex-lft">
      <NavLink to="projects" className="link-button flex-lft">
        <div className="title">All Projects</div>
        <svg viewBox="0 0 24 24">
          <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
        </svg>
      </NavLink>
    </div>
  );
};

export default Section;
