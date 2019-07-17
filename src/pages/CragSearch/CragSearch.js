import React, { Component } from "react";
import "./App.css";
import Jumbotron from "../../components/Jumbotron";

class CragSearch extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <p>List of crags around me</p>
          <p>when to go, weather, popular routes, average difficulty</p>
        </Jumbotron>
      </div>
    );
  }
}

export default CragSearch;
