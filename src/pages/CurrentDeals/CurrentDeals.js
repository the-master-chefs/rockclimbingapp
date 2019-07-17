import React, { Component } from "react";
import "./App.css";
import Jumbotron from "../../components/Jumbotron";

class CurrentDeals extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <p>current deals from multiple stores</p>
          <p>REI</p>
          <p>Moosejaw</p>
          <p>BackCountry</p>
          <p>Climb stuff</p>
      </Jumbotron>
    </div>
    );
  }
}

export default CurrentDeals;
