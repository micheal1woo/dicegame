import Dice from "./Dice";
import "../styles/Board.css";

const Board = ({className, diceValue, color, name, records, score}) => {
  return (
    <div className={`Board ${className}`}>  
      <h2 className="Board-heading">{name}</h2>
      <Dice value={diceValue} color={color}/>
      <h2 className="Board-heading">기록</h2>
      <p>{records.join(",")}</p>
      <h2 className="Board-heading">총점</h2>
      <p>{score}</p>
    </div>
  );
};

export default Board;
