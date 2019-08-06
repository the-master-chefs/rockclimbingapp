import React, { Component } from "react";
import "./HomePage.css";
import Layout from "../../components/Layout/layout";
// import Jumbotron from "../../components/Jumbotron/index.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "../../components/Profile";
import CragSearch from "../CragSearch/index";
import BelayPartner from "../BelayPartner/index";
import Community from "../Community/index";
import MeetUp from "../MeetUp/index.js";
import NoMatch from "../NoMatch/index.js";
import AugRealRoutes from "../AugRealRoutes/index";
import PrivateRoute from "../../components/PrivateRoute";


class HomePage extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Layout>
        <Switch>
          <Route path="/" exact />
          <Route path="/cragsearch" component={CragSearch} />
          <Route path="/belaypartner" component={BelayPartner} />
          <Route path="/community" component={Community} />
          <Route path="/meetup" component={MeetUp} />
          <Route path="/augrealroutes" component={AugRealRoutes} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
        </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default HomePage;
