import React, { Component } from "react";
import "./Community.css";
import Jumbotron from "../../components/Jumbotron";
import Layout from "../../components/Layout/layout";

class Forum extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Jumbotron>
          Community: Sort by most recently released
        </Jumbotron>
        </Layout>
      </div>
    );
  }
}

export default Forum;
