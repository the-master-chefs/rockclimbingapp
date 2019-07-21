import React, { Component } from "react";
import "./App.css";
import Jumbotron from "../../components/Jumbotron";
import Layout from "../../components/Layout/layout";

class AugRealRoutes extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Jumbotron>
          Augmented Reality Route Data
        </Jumbotron>
        </Layout>
      </div>
    );
  }
}

export default AugRealRoutes;
