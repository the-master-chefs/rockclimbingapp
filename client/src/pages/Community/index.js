import React, { Component } from "react";
import "./Community.css";
import Jumbotron from "../../components/Jumbotron";
import Container from "../../components/Container/index.js";

class Forum extends Component {
  render() {
    return (
      <div>
        
        <Jumbotron>
          <h3>Community</h3> 
        </Jumbotron>
        <Container>
          Sort by most recently released
        </Container>
      </div>
    );
  }
}

export default Forum;
