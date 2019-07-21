import React, { Component } from "react";
import "./BelayPartner.css";
import Jumbotron from "../../components/Jumbotron";
import Layout from "../../components/Layout/layout";

class BelayPartner extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Jumbotron>
          <p>Belay Partner Finder</p>
          <p>Should include questions about safety</p>
          <p>should include disclaimer about being in groups of new climbers without a veteran</p>
          <p>do you prefer climbing indoors or outdoors?</p>
          <p>how often do you climb?</p>
          <p>are you okay teaching new climbers?</p>
          <p>how long have you been climbing?</p>
          <p>Dawn Wall or Free Solo?</p>
          <p>Do you own all of your own gear?</p>
          <p>How often do you have to cancel?</p>
          <p>What is the hardest route you have ever climbed?</p> 
        </Jumbotron>
        </Layout>
      </div>
    );
  }
}

export default BelayPartner;
