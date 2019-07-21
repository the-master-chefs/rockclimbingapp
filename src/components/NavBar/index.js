import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends React.Component {

  render() {
    return (
      <div>

        <button type="button" id="btn0" className="btn btn-primary" onClick={this.props.HomePage}>
          Sendsville
        </button>

        <button type="button" id="btn0" className="btn btn-primary" onClick={this.props.Community}>
          Community
        </button>
        
        <button type="button" id="btn0" className="btn btn-primary" onClick={this.props.CragSearch}>
          Crag Search
        </button>
        
        <button type="button" id="btn0" className="btn btn-primary" onClick={this.props.BelayPartner}>
          Belay Finder
        </button>
      
      </div>
    )}
}

export default App;















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

