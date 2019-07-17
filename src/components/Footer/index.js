import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub , faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="nav justify-content-center fixed-bottom">
      <a className="nav-link" href="https://github.com/AMDLnghrns"><FontAwesomeIcon icon={faGithub} /></a>
      <a className="nav-link" href="mailto: aduncan001@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      <a className="nav-link" href="https://www.linkedin.com/in/aduncan001/"><FontAwesomeIcon icon={faLinkedin} /></a>
    </footer>
  );
}

export default Footer;

// Rock and Ice
// Climbing Porn
// REI
// MooseJaw
// Back Country
// Climb stuff
// 

// when to go, weather, popular routes, average difficulty