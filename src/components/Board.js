import Dice from "./Dice";
import "../styles/Board.css";

const Board = ({diceValue, color}) => {
  return (
    <div> 
      <Dice value={diceValue} color={color} />
    </div>
  );
};

export default Board;
