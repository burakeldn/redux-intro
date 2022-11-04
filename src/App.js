import React from "react";
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import "./style.css"

function App() {
  return (
    <div className="main">
      <div className="container">
        <Counter/>
        <IncreaseCounter/>
        <DecreaseCounter/>
        <IncreaseByTwoCounter/>
      </div>
    </div>
  );
}

export default App;
