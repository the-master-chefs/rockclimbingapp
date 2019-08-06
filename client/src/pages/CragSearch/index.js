import React, { Component } from "react";
import "./CragSearch.css";
import Jumbotron from "../../components/Jumbotron";
import ContainerA from "../../components/Container";
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
// import { users } from "../../reducers/users";
import actions from "../../actions";
import Maps from "../../components/Map/index.js"
import Gauge from "../../components/Gauge/index.js"
import Weather from "../../components/Weather/index.js"

class CragSearch extends Component {
  render(props) {
    return (
      <div>
        <ContainerA id = "Title" >
          <Jumbotron>
            <h2>Crag Finder</h2>
          </Jumbotron>
        </ContainerA>

        <ContainerA id = "Maps">
          <Maps />
        </ContainerA>

        <Container>
          <Row>
            <Col xs="6">
              <Container id = "Weather">
                <Weather />
              </Container>
            </Col>
            <Col xs="6">
              <ContainerA id = "Gauge">
                <Gauge />
              </ContainerA>
            </Col>
          </Row>
        </Container>

        <ContainerA id = "Notes">
          <p>List of crags around me Mountain Project Data API</p>
          <p>water levels: USG Water Services API, Dark Sky API, Google Maps API</p> 
          <p>popular routes: Mountain Project Data API (www.mountainproject.com/data)</p>
          <p>average difficulty: Mountain Project Data API</p>
          <br />
          <p>MP: https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=30.26&lon=-97.74&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=108549143-9b4de567d0f4ef08b3592355812a2285</p>
          <p>USWS: https://waterservices.usgs.gov/nwis/iv/?format=json&bBox=-97.791272,30.17556,-97.651025,30.378428&parameterCd=00060,00065&siteStatus=active</p>
        </ContainerA>

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



