import React, { Component } from "react";
import "./App.css";
import Jumbotron from "../../components/Jumbotron";

class Forum extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          Community: Sort by most recently released
        </Jumbotron>
      </div>
    );
  }
}

export default Forum;
