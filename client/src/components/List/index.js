import React from "react";
import "./style.css";

export const ListItem = props => (
  <li className="list-group-item">
    {props.children}
  </li>
);



export const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};