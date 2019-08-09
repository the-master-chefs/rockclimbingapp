import React from "react";
import Footer from "../Footer/index";
import "./layout.css";

const Layout = ({ children }) => (
  <div>
  <div className="contain">
    {children}
  </div>
  <Footer />
  </div>
);

export default Layout;