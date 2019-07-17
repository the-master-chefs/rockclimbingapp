import React, { Component } from "react";
import "./App.css";
import Jumbotron from "../../components/Jumbotron";

class ClimbingNews extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <p>Rock Climbing news scraper</p>
          <p>rock and ice, climbing porn</p>
        </Jumbotron>
      </div>
    );
  }
}

export default ClimbingNews;

