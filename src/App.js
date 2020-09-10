import React from "react";
import Title from "./Title";
import "./App.css";
import DadJoke from "./DadJoke";
import Bikes from "./Bikes";

function App() {
  console.log("Heisann");
  return (
    <div className="App">
      <Title />
      <DadJoke />
      <Bikes />
    </div>
  );
}

export default App;
