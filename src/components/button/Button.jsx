import React from "react";
import "./Button.css";

const Button = (props) => {
  const { title } = props;
  console.log(props);
  return <button>{title}</button>;
};

export default Button;
