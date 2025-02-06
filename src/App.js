import Board from "./components/Board";
import Button from "./components/Button";
import "./App.css";
import diceLogo from "./assets/logo.png"
import { useState } from "react";

function App(){
  const [playerDice, setPlayerDice] = useState(1);

  const [opponentDice, setOpponentDice] = useState(1);

  const rollDice = () => {
    const newPlayerDice = Math.floor(Math.random() * 6) + 1;
    const newOpponentDice = Math.floor(Math.random() * 6) + 1;


    setPlayerDice(newPlayerDice);
    
    setOpponentDice(newOpponentDice);


   
  };

  const resetGame = () => {
    setPlayerDice(1);
    setOpponentDice(1);
  };



  return (
    <div className="App">
      <img className="App-logo" src={diceLogo} alt="주사위 게임 로고" />
      <h1 className="App-title">주사위게임</h1>
      <div>
        <Button className="App-button" text="던지기" color="blue" onClick={rollDice}/>
        <Button className="App-button" text="처음부터" color="red" onClick={resetGame}/>
      </div>
      <div className="App-boards">
        <Board className="App-board" diceValue={playerDice} color="blue" name="나" score= "1" records="10"/>
        <Board className="App-board" diceValue={opponentDice} color="red" name="상대방" score= "2" records="11"/>
      </div>
    </div>
  );
}

export default App;