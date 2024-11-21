import React from "react";
import "./Button.css";

const Button = ({ naslov, handle }) => {


  return (
    <button className={naslov ? "crvena" : "plava"} onClick={handle}>
      {naslov}
    </button>
  );
};

export default Button;
