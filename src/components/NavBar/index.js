import React from "react";
import "./style.css";

function Title() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="/"><h4>Rock Climbing App</h4></a>
        </li>
        <section id="Blank"></section>
        <li className="nav-item" id="link">
          <a className="nav-link" href="./Community">Community</a>
        </li>
        <li className="nav-item" id="link">
          <a className="nav-link active" href="./CragSearch">Crag Search</a>
        </li>
        <li className="nav-item" id="link">
          <a className="nav-link" href="./BelayPartner">Belay Finder</a>
        </li>
        <li className="nav-item" id="link">
          <a className="nav-link" href="./MeetUp">MeetUp</a>
          </li>
        {/*<li className="nav-item" id="link">
          <a className="nav-link" href="./AugRealRoutes">AR Routes</a>
        </li>*/}
      </ul>
    </div>
  );
}

export default Title;