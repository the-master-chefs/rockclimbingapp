import React from "react";
import NavBar from "../NavBar/index";
import Footer from "../Footer/index";
import "./layout.css";

const Layout = ({ children }) => (
  <div>
  <NavBar />
  <div className="contain">
    {children}
  </div>
  <Footer />
  </div>
);

export default Layout;