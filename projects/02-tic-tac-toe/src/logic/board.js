import { WINNER_LINES } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
  // Recorrer las lineas ganadoras
  for (const line of WINNER_LINES) {
    const [a, b, c] = line
    if (
      boardToCheck[a] && // 0 -> x u o
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a] // x u o ganador
    }
  }
  // Si no hay ganador
  return null
}

export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every((value) => value !== null)
}
