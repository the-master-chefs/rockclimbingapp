import React, { Component } from "react";
import "./MeetUp.css";
import Jumbotron from "../../components/Jumbotron";
import Layout from "../../components/Layout/layout";

class MeetUp extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Jumbotron>
          meetup scheduler like meetup app
        </Jumbotron>
        </Layout>
      </div>
    );
  }
}

export default MeetUp;
