import React from "react";
import "./CragSearch.css";
import Jumbotron from "../../components/Jumbotron";
import ContainerA from "../../components/Container";
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
// import { users } from "../../reducers/users";
import actions from "../../actions";
// import Maps from "../../components/Map/index.js";
import Gauge from "../../components/Gauge/index.js";
import Weather from "../../components/Weather/index.js";
import MPWidget from "../../components/MPWidget/index.js";
import { getRandomDog } from "../../store.js";


function CragSearch(props) {
  if(props.dog.loading) {
    return <div>Loading</div>;
  }
  if(props.dog.data && props.dog.data.message){
    return <img onClick={()=>props.getRandomDog()} src={props.dog.data.message} alt="dog"/>;
  }

  return (
    <div>
      <ContainerA id = "Title" >
        <Jumbotron>
          <h2>Crag Finder</h2>
        </Jumbotron>
      </ContainerA>

      <ContainerA id = "Widget">
        <MPWidget />
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

      <ContainerA>
        <p>Seismic Wall: https://waterservices.usgs.gov/nwis/iv/?format=json&bBox=-97.771395,30.2635416,-97.771394,30.2635417&parameterCd=00060,00065&siteStatus=active</p>
        <p>Gus: https://waterservices.usgs.gov/nwis/iv/?format=json&bBox=-97.772229,30.2635416,-97.772227,30.2635417&parameterCd=00060,00065&siteStatus=active</p>
      </ContainerA>

      <ContainerA>
        <span onClick={()=>props.getRandomDog()}>
          test
        </span>
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

const mapDispatchToProps = dispatch => {
  return {
    getRandomDog: getRandomDog.action(dispatch),
    logout: payload => dispatch(actions.logout(payload))
  };
};

export default connect(function(state){
  return {
    name: state.users.name,
    dog: state.dog
  };
}, mapDispatchToProps)(CragSearch);



