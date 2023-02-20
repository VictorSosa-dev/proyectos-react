import { useState } from "react"
import confetti from "canvas-confetti"

import "./App.css"
import { Square }from "./components/Square.jsx"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { TURNS } from "./constants.js"

import { checkWinnerFrom, checkEndGame } from "./logic/board.js"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    //Verificar si ya hay un valor en el tablero
    if (board[index] || winner) return
    const newBoard = [...board]
    //actualizar el tablero
    newBoard[index] = turn
    setBoard(newBoard)

    //Actualizar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
    //Verificar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner) // La actualizacion del estado es asincrona
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar el juego</button>
      <section className="game">
        {board.map((value, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {value}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>
  )
}

export default App