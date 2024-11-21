import React, { useState } from "react";
import "./HomePage.css";
import Button from "../../components/button/Button";

const HomePage = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  }
    const handleDecrement = () => {
      setCounter((prevCounter) => prevCounter - 1);
    };
    return (
      <div>
        <h1>{counter}</h1>
        {/* <button onClick={handleIncrement}>Increment</button> */}
        <Button title="Increment" increment={handleIncrement} />
        <Button title="Decrement" decrement={handleDecrement} />
      </div>
    );
  };

export default HomePage;
