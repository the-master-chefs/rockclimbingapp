import React from "react";
import "./style.css";

export const Input = props => (
  <div className="form-group">
    <Label htmlFor={props.name}>{props.label}</Label>
    <input className="form-control" {...props}/>
  </div>
);

export const Label = props => (
  <label htmlFor={props.name}>{props.children}</label>
);

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-info">
    {props.children}
  </button>
);