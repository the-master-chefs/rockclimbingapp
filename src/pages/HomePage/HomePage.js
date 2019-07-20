import React, { Component } from "react";
import "./App.css";
import Jumbotron from "../../components/Jumbotron/index.js";
import Navbar from "../../components/NavBar/index"
import Footer from "../../components/Footer/index"

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron>
          Home Page
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
