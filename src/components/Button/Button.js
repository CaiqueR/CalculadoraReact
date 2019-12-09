import React from "react";
import "./Button.css";
// import { Container } from './styles';

const Button = props => (
  <button
  onClick={()=> props.click(props.button)}
    className={`button ${props.operation ? "operation" : ""}
                  ${props.double ? "double" : ""}
                  ${props.triple ? "triple" : ""}`}
  >
    {props.button}
  </button>
);

export default Button;
