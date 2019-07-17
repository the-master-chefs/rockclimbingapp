import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import CragSearch from "./pages/CragSearch/CragSearch.js"; 
import ClimbingNews from "./pages/ClimbingNews/ClimbingNews.js";
import BelayPartner from "./pages/BelayPartner/BelayPartner.js";
import CurrentDeals from "./pages/CurrentDeals/CurrentDeals.js";
import Forum from "./pages/Forum/Forum.js";
import MeetUp from "./pages/MeetUp/MeetUp.js";
import AugRealRoutes from "./pages/AugRealRoutes/AugRealRoutes.js";
import NoMatch from "./pages/NoMatch/NoMatch.js";
import Navbar from "./components/NavBar/index.js";
import Container from "./components/Container/index.js"
import Footer from "./components/Footer/index.js";

const App = () => (
  <Router>
    <div>
      <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/CragSearch" component={CragSearch} /> 
            <Route exact path="/ClimbingNews" component={ClimbingNews} />
            <Route exact path="/BelayPartner" component={BelayPartner} />
            <Route exact path="/CurrentDeals" component={CurrentDeals} />
            <Route exact path="/Forum" component={Forum} />
            <Route exact path="/MeetUp" component={MeetUp} />
            <Route exact path="/AugRealRoutes" component={AugRealRoutes} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      <Footer />
    </div>
  </Router>
);

export default App;
