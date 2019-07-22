import React from "react";
import Container from "./components/Container/index.js";
import Navbar from "./components/NavBar/index.js";
import Footer from "./components/Footer/index.js";
import Jumbotron from "./components/Jumbotron/index.js";

class App extends React.Component {
  state = {
    page: "HomePage"
  };

  HomePage = () => {
    this.setState({ page: "HomePage" });
  };
  Community = () => {
    this.setState({ page: "Community" });
  };
  CragSearch = () => {
    this.setState({ page: "CragSearch" });
  };
  BelayPartner = () => {
    this.setState({ page: "BelayPartner" });
  };

  render() {
    return (
      <div>
        <Navbar />
        {/* <Navbar 
          HomePage={this.HomePage.bind(this)}
          Community={this.Community.bind(this)}
          CragSearch={this.CragSearch.bind(this)}
          BelayPartner={this.BelayPartner.bind(this)}
        /> */}
        <Jumbotron>{this.state.page}</Jumbotron>
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
