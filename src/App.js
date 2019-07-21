import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Container from "./components/Container/index.js"
// import HomePage from "./pages/HomePage/HomePage.js";
// import CragSearch from "./pages/CragSearch/CragSearch.js";
// import BelayPartner from "./pages/BelayPartner/BelayPartner.js";
// import Community from "./pages/Community/Community.js";
// import MeetUp from "./pages/MeetUp/MeetUp.js";
// import AugRealRoutes from "./pages/AugRealRoutes/AugRealRoutes.js";
// import NoMatch from "./pages/NoMatch/NoMatch.js";
import Navbar from "./components/NavBar/index.js";
import Footer from "./components/Footer/index.js"
import Jumbotron from "./components/Jumbotron/index.js";

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar 
          HomePage={this.HomePage.bind(this)}
          Community={this.Community.bind(this)}
          CragSearch={this.CragSearch.bind(this)}
          BelayPartner={this.BelayPartner.bind(this)}
        />
        <Jumbotron>
          {this.state.page}
        </Jumbotron>
        <Container>
          
        </Container>
        <Footer />
      </div>
    )}
}

export default App;



// const App = () => (
//   <Router>
//     <Navbar/>
//     <Switch>
//       <Route exact path="/" component={HomePage} />
//       <Route exact path="/CragSearch" component={CragSearch} />
//       <Route exact path="/BelayPartner" component={BelayPartner} />
//       <Route exact path="/Community" component={Community} />
//       <Route exact path="/MeetUp" component={MeetUp} />
//       <Route exact path="/AugRealRoutes" component={AugRealRoutes} />
//       <Route component={NoMatch} />
//     </Switch>
//     <Footer />
//   </Router>
// );