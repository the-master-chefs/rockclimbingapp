import React, { Component } from "react";
import "./App.css";
import Jumbotron from "../../components/Jumbotron";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          No Match
        </Jumbotron>
      </div>
    );
  }
}

export default NoMatch;

