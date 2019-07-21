import React, { Component } from "react";
import "./App.css";
import Jumbotron from "../../components/Jumbotron";
import FallingGIF from "./giphy.gif";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          This page does not exist!
        </Jumbotron>
        <img src={FallingGIF} alt="GIF of falling climber"/>
      </div>
    );
  }
}

export default NoMatch;

