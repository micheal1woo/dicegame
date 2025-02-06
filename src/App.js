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
        <Board className="App-board" diceValue={2} color="blue" name="나" score= "1" records="10"/>
        <Board className="App-board" diceValue={2} color="red" name="상대방" score= "2" records="11"/>
      </div>
    </div>
  );
}

export default App;