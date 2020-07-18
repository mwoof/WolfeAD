import React from "react";
import { NavLink } from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";

import "./indexStyle.css";
import Line from "../../Line";

import DotGrid from "../../grid";

const SideNav = (props) => {
  return (
    <div
      className={`sidNav-wrap flex-col-out ${
        props.sideNav ? "SideNav-act" : ""
      }`}
    >
      <nav className="flex-col-rit">
        <NavLink
          exact
          to="/"
          onClick={(e) => props.openSideNav()}
          activeClassName="nav-txt-hlght"
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          onClick={(e) => props.openSideNav()}
          activeClassName="nav-txt-hlght"
        >
          Projects
        </NavLink>
        <NavLink
          to="/rendering"
          onClick={(e) => props.openSideNav()}
          activeClassName="nav-txt-hlght"
        >
          Rendering
        </NavLink>
        {!props.authed ? (
          ""
        ) : (
          <NavLink
            to="/admin"
            onClick={(e) => props.openSideNav()}
            activeClassName="nav-txt-hlght"
          >
            Admin
          </NavLink>
        )}
        <Line width="32px" className="sidNav-div" />
        <a href="tel:3146900099" target="_blank" className="flex-cent">
          <div>Call</div>
          <svg
            style={{ width: "18px", height: "18px", marginLeft: "12px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z"
            />
          </svg>
        </a>
        <a
          href="mailto:mattwolfe@wolfead.net"
          target="_blank"
          className="flex-cent"
        >
          <div>Mail</div>
          <svg
            style={{ width: "18px", height: "18px", marginLeft: "12px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
            />
          </svg>
        </a>
        <a
          href="https://www.google.com/maps/place/Wolfe+Architecture+%26+Design,+7412+Manchester+Rd,+St.+Louis,+MO+63143/@38.6122807,-90.3223777,17z/data=!4m2!3m1!1s0x87d8cbf1a12ddb3f:0xf072dcaedc44e5e8"
          target="_blank"
          className="flex-cent"
        >
          <div>Directions</div>
          <svg
            style={{ width: "18px", height: "18px", marginLeft: "12px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"
            />
          </svg>
        </a>

        <Line width="32px" className="sidNav-div" />

        {!props.authed ? (
          <NavLink
            to="/login"
            onClick={(e) => props.openSideNav()}
            activeClassName="nav-txt-hlght"
          >
            Log in
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            onClick={() => {
              props.openSideNav();
              props.firebase
                .auth()
                .signOut()
                .catch(function (error) {
                  console.log(error);
                });
            }}
            activeClassName="nav-txt-hlght"
          >
            Log out
          </NavLink>
        )}
      </nav>

      <div className="siNav-foot flex-col-rit" style={{ marginRight: "16px" }}>
        <div className="txt">314-960-0099</div>
        <a
          className="nav-txt-hlght"
          style={{ fontSize: "14px" }}
          href="mailto:mattwolfe@wolfead.net"
        >
          mattwolfe@wolfead.net
        </a>
      </div>

      <div className="grid-wrapper flex-cent">
        <div className="" style={{ height: "100%" }}>
          <DotGrid top="50%" right="-66px" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

// <Link
//   className="nav-txt-hlght"
//   to="/#contact"
//   onClick={(e) => props.openSideNav()}
// >
//   Contact
// </Link>
