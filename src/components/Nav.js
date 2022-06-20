import React from "react";
import { NavLink } from "react-router-dom";

import "../style/Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <ul>
        <li className="da">
          <NavLink to="/dashboard">
            <div className="img"></div>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="do">
          <NavLink to="/doctor">
            <div className="img"></div>
            <span>Doctor</span>
          </NavLink>
        </li>
        <li className="co">
          <NavLink to="/contact">
            <div className="img"></div>
            <span>Contact</span>
          </NavLink>
        </li>
        <li className="me">
          <NavLink to="/medicine">
            <div className="img"></div>
            <span>Medicine</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
