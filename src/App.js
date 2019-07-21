import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Route, HashRouter } from "react-router-dom";

import Container from "./components/Container/index.js"
import HomePage from "./pages/HomePage/HomePage.js";
import CragSearch from "./pages/CragSearch/CragSearch.js";
import BelayPartner from "./pages/BelayPartner/BelayPartner.js";
import Community from "./pages/Community/Community.js";
// import MeetUp from "./pages/MeetUp/MeetUp.js";
// import AugRealRoutes from "./pages/AugRealRoutes/AugRealRoutes.js";
// import NoMatch from "./pages/NoMatch/NoMatch.js";
import Navbar from "./components/NavBar/index.js";
// import Jumbotron from "./components/Jumbotron/index.js";
import Footer from "./components/Footer/index.js"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <Container>
            <div className="content">
              <Route exact path="/" component={HomePage}/>
              <Route path="/Community" component={Community}/>
              <Route path="/CragSearch" component={CragSearch}/>
              <Route path="/BelayPartner" component={BelayPartner}/>
              {/*<Route component={NoMatch} />*/}
            </div>
          </Container>
        </div> 
        <Footer />
      </HashRouter>
    );
  }
}

export default App;


