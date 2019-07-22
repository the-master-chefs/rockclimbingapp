import React, { Component } from "react";
import "./NoMatch.css";
import Jumbotron from "../../components/Jumbotron";
import FallingGIF from "./giphy.gif";
import Container from "../../components/Container/index"

class NoMatch extends Component {
  render() {
    return (
      <div>
        
        <Jumbotron>
          This page does not exist!
        </Jumbotron>
        
      </div>
    );
  }
}

export default NoMatch;

