//hooks
import { useEffect, useState } from 'react';
// style sheets 
import '../../assets/css/Board.css';


//# enums
import turns from '../../js/enums/turn.js';
import winningCombos from '../../js/enums/winningCombinations.js';
//--*>


//#components
import Item from './Item.jsx';
//--*>

//#alerts
import { 
  alertWinner,
  alertDraw 
} from '../../js/swalFire/allAlerts.js';
//--*>

//#util javaScripts

//# add data local storage winners and lucers
import addData  from '../../js/util/addData.js';
//--*>

const checkWinner = (combos, boardGame) => {
  for (let combo in combos) {
    let [a, b, c] = combos[combo];
    if (boardGame[a] != null && boardGame[a] === boardGame[b] && boardGame[a] === boardGame[c]) {
      console.log(boardGame[a])
      return boardGame[a];
    }
  }
  return null;
};

function Board() {

  //states
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(turns.player_1);
  const [winner, setWinner] = useState(undefined);

  const asignWinnerAndLucer = (oneWinner) => {
    if (oneWinner === "X") return ["player1", "player2"];
    else if (oneWinner === "O") return ["player2", "player1"];

  };


  const updateBoard = (index) => {
    if (winner != undefined || board[index] != null) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === turns.player_1 ? turns.player_2 : turns.player_1;
    setTurn(newTurn);
  };

  // set winner
  useEffect(() => {
    const checkW = checkWinner(winningCombos, board);
    if (checkW != null) {
      setWinner(checkW);
    } else if (board.every(cell => cell != null)) {
      setWinner(false);
    }
  }, [board]);

  

  
  useEffect(() => {
    if (winner === "X" || winner === "O") {
      const [winnerGame ,lucer] = asignWinnerAndLucer(winner);
      //paint window winner
      alertWinner(winnerGame);

      //Add data local storage
      addData(winnerGame,lucer)
     
    } else if (winner==false) {
      alertDraw()
    }
  }, [winner]);

  return (
    <>
      <section className='board'>
        {
          board.map((value, index) => (
            <Item key={index} value={value} index={index} updateBoard={updateBoard} />
          ))
        }
      </section>
    </>
  );
}

export default Board;
