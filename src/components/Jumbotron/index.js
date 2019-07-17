import React from "react";
import "./style.css";

const Jumbotron = ({ children }) => (
  <div>
    {children}
  </div>
);

export default Jumbotron;

// <div 
// style={{ height: 150, clear: "both", paddingTop: 10, paddingBottom: 20, textAlign: "Center"}}
// className="container">
// {children}
// </div>