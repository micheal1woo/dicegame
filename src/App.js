import Board from "./components/Board";
import Button from "./components/Button";
import "./App.css";
import diceLogo from "./assets/logo.png"

function App(){
  return (
    <div className="App">
      <img className="App-logo" src={diceLogo} alt="주사위 게임 로고" />
      <h1 className="App-title">주사위게임</h1>
      <div>
        <Button/>
        <Button/>
      </div>
      <div className="App-boards">
        <Board/>
        <Board/>
      </div>
    </div>
  );
}

export default App;