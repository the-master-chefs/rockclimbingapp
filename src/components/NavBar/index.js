import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";


export default class NavBar extends React.Component {

  render() {
    return (
      <div className="navigation">
<ul className="nav">
        <li className="nav-li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link to="/cragsearch">Crag Search</Link>
        </li>
        <li className="nav-li">
          <Link to="/belaypartner">Belay Partner</Link>
        </li>
        <li className="nav-li">
          <Link to="/community">Community</Link>
        </li>
        <li className="nav-li">
          <Link to="/meetup">Meetup</Link>
        </li>
        <li className="nav-li">
          <Link to="/augrealroutes">AR</Link>
        </li>
        <li className="nav-li">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      </div>
    )}
}

















// import React from "react";
// import "./style.css";

// export default function Navbar() {
//   return (
//     <div>
//       <ul className="nav">
//         <li className="nav-item">
//           <a className="nav-link active" href="/"><h4>Rock Climbing App</h4></a>
//         </li>
//         <section id="Blank"></section>
//         <li className="nav-item" id="link">
//           <a className="nav-link" href="./Community">Community</a>
//         </li>
//         <li className="nav-item" id="link">
//           <a className="nav-link active" href="./CragSearch">Crag Search</a>
//         </li>
//         <li className="nav-item" id="link">
//           <a className="nav-link" href="./BelayPartner">Belay Finder</a>
//         </li>
//         {/*<li className="nav-item" id="link">
//           <a className="nav-link" href="./MeetUp">MeetUp</a>
//         </li>*/}
//         {/*<li className="nav-item" id="link">
//           <a className="nav-link" href="./AugRealRoutes">AR Routes</a>
//         </li>*/}
//       </ul>
//     </div>
//   );
// }

