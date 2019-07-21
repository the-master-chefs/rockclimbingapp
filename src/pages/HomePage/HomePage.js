import React, { Component } from "react";
import "./App.css";
import Jumbotron from "../../components/Jumbotron/index.js";


class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          Home Page
        </Jumbotron>
      </div>
    );
  }
}

export default HomePage;
