import React, { Component } from "react";
import "./App.css";
import Jumbotron from "../../components/Jumbotron/index.js";
import Container from "../../components/Container";


class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h3>Home Page</h3>
        </Jumbotron>
        <Container>
          Content
        </Container>
      </div>
    );
  }
}

export default HomePage;
