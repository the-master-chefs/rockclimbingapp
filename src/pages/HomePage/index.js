import React, { Component } from "react";
import "./HomePage.css";
import Layout from "../../components/Layout/layout";
import Jumbotron from "../../components/Jumbotron/index.js";


class HomePage extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Jumbotron>
          Home Page
        </Jumbotron>
        </Layout>
      </div>
    );
  }
}

export default HomePage;
