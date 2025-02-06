import Board from "./components/Board";
import Button from "./components/Button";
import "./App.css";
import diceLogo from "./assets/logo.png"
// import { useState } from "react";

function App(){
  





  return (
    <div className="App">
      <img className="App-logo" src={diceLogo} alt="주사위 게임 로고" />
      <h1 className="App-title">주사위게임</h1>
      <div>
        <Button className="App-button" text="던지기" color="blue"/>
        <Button className="App-button" text="처음부터" color="red"/>
      </div>
      <div className="App-boards">
        <Board diceValue={2} color="blue"/>
        <Board diceValue={2} color="red"/>
      </div>
    </div>
  );
}

export default App;