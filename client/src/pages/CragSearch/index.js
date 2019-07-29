import React, { Component } from "react";
import "./CragSearch.css";
import Jumbotron from "../../components/Jumbotron";
import Container from "../../components/Container";

import { connect } from "react-redux";
import { users } from "../../reducers/users";
import actions from "../../actions";
import Maps from "../../components/Map/index.js"

class CragSearch extends Component {
  render(props) {
    return (
      <div>
        <Jumbotron>
          <h3>Crag finder</h3>
        </Jumbotron>
        <Container>
          <Maps />
        </Container>
        <Container>
          <p>List of crags around me Mountain Project Data API</p>
          <p>when to go, </p>
          <p>weather: Dark Sky or React-forecast (npm i react-forecast)</p> 
          <p>water levels: USG Water Services API, Dark Sky API, Google Maps API</p> 
          <p>popular routes: Mountain Project Data API (www.mountainproject.com/data)</p>
          <p>average difficulty: Mountain Project Data API</p>
        </Container>
        {props}
      </div>
    );
  }
}

console.log(users);

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

