import React, { Component } from "react";
import "./CragSearch.css";
import Jumbotron from "../../components/Jumbotron";
import Layout from "../../components/Layout/layout";

class CragSearch extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Jumbotron>
          <p>List of crags around me Mountain Project Data API</p>
          <p>when to go, </p>
          <p>weather: Dark Sky or React-forecast (npm i react-forecast)</p> 
          <p>water levels: USG Water Services API, Dark Sky API, Google Maps API</p> 
          <p>popular routes: Mountain Project Data API (www.mountainproject.com/data)</p>
          <p>average difficulty: Mountain Project Data API</p>
        </Jumbotron>
        </Layout>
      </div>
    );
  }
}

export default CragSearch;
