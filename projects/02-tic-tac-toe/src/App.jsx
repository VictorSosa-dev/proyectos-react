import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

const Square = ({ children, index, updateBoard, isSelected}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

const winnerLines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function App() {
  const [board,setBoard] = useState(Array(9).fill(null))
  const [turn,setTurn] = useState(TURNS.X)
  const [winner,setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    //Recorrer las lineas ganadoras
    for(let line of winnerLines) {
      const [a,b,c] = line
      if(
        boardToCheck[a] && //0 -> x u o
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
        ){
          return boardToCheck[a] //x u o ganador
      }
    }
    //Si no hay ganador
    return null
  }

  const updateBoard = (index) => {
    
    //Verificar si ya hay un valor en el tablero
    if(board[index] || winner) return
    const newBoard = [...board]
    //actualizar el tablero
    newBoard[index] = turn
    setBoard(newBoard)

    //Actualizar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //Verificar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_,index) => 
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
          )
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

    </main>
  )
}

export default App