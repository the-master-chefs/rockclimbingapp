import React, { Component } from "react";
import "./NoMatch.css";
import Jumbotron from "../../components/Jumbotron";
import Layout from "../../components/Layout/layout";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Jumbotron>
          No Match
        </Jumbotron>
        </Layout>
      </div>
    );
  }
}

export default NoMatch;

