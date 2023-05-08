
import Board from './components/Board'
import './styles.scss'
import { useState } from 'react';
import { calculateWinner } from './winner';

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
 const [isXNext,setXNext]=useState(false);
 const winner =calculateWinner(squares)

const nextPlayer =  isXNext?"X":"O";
const statusMessage = winner?`Winner is ${winner}`:`Next player is ${nextPlayer}`






  const handleSquareClick = clickedPosition => {

if(squares[clickedPosition] || winner){
  return;
}




    setSquares(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext?'X':'O';
        }
        return squareValue;
      });
    });
    setXNext((currentIsXNext)=>!currentIsXNext)
  };
  return (
    <div className='app'>
    <h2>{statusMessage}</h2>
  <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
    
  )
}

export default App
