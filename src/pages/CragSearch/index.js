import React, { Component } from "react";
import "./CragSearch.css";
import Jumbotron from "../../components/Jumbotron";
import Container from "../../components/Container";

class CragSearch extends Component {
  render() {
    return (
      <div>
        
        <Jumbotron>
          <h3>Crag finder</h3>
        </Jumbotron>
        <Container>
          <p>List of crags around me Mountain Project Data API</p>
          <p>when to go, </p>
          <p>weather: Dark Sky or React-forecast (npm i react-forecast)</p> 
          <p>water levels: USG Water Services API, Dark Sky API, Google Maps API</p> 
          <p>popular routes: Mountain Project Data API (www.mountainproject.com/data)</p>
          <p>average difficulty: Mountain Project Data API</p>
        </Container>
      </div>
    );
  }
}

export default CragSearch;
