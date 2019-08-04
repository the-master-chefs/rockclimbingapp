import React, { Component } from "react";
import "./CragSearch.css";
import Jumbotron from "../../components/Jumbotron";
import Container from "../../components/Container";

import { connect } from "react-redux";
// import { users } from "../../reducers/users";
import actions from "../../actions";
import Maps from "../../components/Map/index.js"

import Weather from "../../components/Weather/index.js"

class CragSearch extends Component {
  render(props) {
    return (
      <div>
        <Jumbotron>
          <h3>Crag Finder</h3>
        </Jumbotron>
        <Container id = "Maps">
          <Maps />
        </Container>

        <Container id = "Weather">
          <Weather />
        </Container>

        <Container id = "notes">
          <p>List of crags around me Mountain Project Data API</p>
          <p>when to go, </p>
          <p>weather: Dark Sky or React-forecast (npm i react-forecast)</p> 
          <p>water levels: USG Water Services API, Dark Sky API, Google Maps API</p> 
          <p>popular routes: Mountain Project Data API (www.mountainproject.com/data)</p>
          <p>average difficulty: Mountain Project Data API</p>
          <br />
          <p>MP: https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=30.26&lon=-97.74&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=108549143-9b4de567d0f4ef08b3592355812a2285</p>
          <p>USWS: https://waterservices.usgs.gov/nwis/iv/?format=json&bBox=-98.000000,30.000000,-96.000000,30.500000&parameterCd=00060,00065&siteStatus=active</p>
        </Container>
      


        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: payload => dispatch(actions.logout(payload))
  };
};

export default connect(function(state){
  return {
    name: state.users.name,
  };
}, mapDispatchToProps)(CragSearch);



