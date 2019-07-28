import React, { Component } from "react";
import "./BelayPartner.css";
import Jumbotron from "../../components/Jumbotron";
import Container from "../../components/Container/index.js";

class BelayPartner extends Component {
  render() {
    return (
      <div>
       
        <Jumbotron>
          <h3>Belay Partner Finder</h3>
        </Jumbotron>
        <Container>
          <p>*Disclaimer: While this app attempts to help you find a person to climb with, you should still attempt to find a "veteran" climber to climb with your group. </p>
          <br />
          <br />
          <p>Pick some of the best for build out.</p>
          <p>Name:</p>
          <p>Contact:</p>
          <p>When did you start climbing? (Calculate out years climbing)</p>
          <p>When did you start leading?</p>
          <p>Hardest completed outdoors route</p>
          <p>Hardest completed indoors route</p>
          <p>Hardest route you feel comfortable belaying someone</p>
          <p>How comfortable are you with an ATC?</p>
          <p>How comfortable are you with a GRI-GRI?</p>
          <p>How safe of a climber do you consider yourself?</p>
          <p>Do you prefer to climb indoors or outdoors?</p>
          <p>How often do you climb?</p>
          <p>Are you comfortable teaching new climbers?</p>
          <p>Have you ever dropped anyone?</p>
          <p>How long have you been climbing?</p>
          <p>Dawn Wall or Free Solo?</p>
          <p>Do you own all of your own gear?</p>
          <p>How often do you have to cancel?</p>
          <p>What is the grade of the hardest route you have ever climbed?</p>
          <p>What gear do you own?</p>
        </Container>
      </div>
    );
  }
}

export default BelayPartner;
