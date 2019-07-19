import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import CragSearch from "./pages/CragSearch/CragSearch.js";
import BelayPartner from "./pages/BelayPartner/BelayPartner.js";
import Community from "./pages/Community/Community.js";
import MeetUp from "./pages/MeetUp/MeetUp.js";
import AugRealRoutes from "./pages/AugRealRoutes/AugRealRoutes.js";
import NoMatch from "./pages/NoMatch/NoMatch.js";
import Navbar from "./components/NavBar/index.js";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/CragSearch" component={CragSearch} />
      <Route exact path="/BelayPartner" component={BelayPartner} />
      <Route exact path="/Community" component={Community} />
      <Route exact path="/MeetUp" component={MeetUp} />
      <Route exact path="/AugRealRoutes" component={AugRealRoutes} />
      <Route exact path="/nav" component={Navbar} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
