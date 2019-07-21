import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Navbar(props) {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/"><h4>Rock Climbing App</h4></NavLink>
        </li>
        <section id="Blank"></section>
        <li className="nav-item" id="link">
          <NavLink to="/Community">Community</NavLink>
        </li>
        <li className="nav-item" id="link">
          <NavLink to="/CragSearch">Crag Search</NavLink>
        </li>
        <li className="nav-item" id="link">
          <NavLink to="/BelayPartner">Belay Finder</NavLink>
        </li>
        {/*<li className="nav-item" id="link">
          <a className="nav-link" href="./MeetUp">MeetUp</a>
        </li>*/}
        {/*<li className="nav-item" id="link">
          <a className="nav-link" href="./AugRealRoutes">AR Routes</a>
        </li>*/}
      </ul>
    </div>
  );
}

