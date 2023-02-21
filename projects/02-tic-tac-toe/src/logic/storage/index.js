export function saveGameToStorage({ board, turn }) {
  localStorage.setItem('board', JSON.stringify(board))
  localStorage.setItem('turn', turn)
}

export function resetGameToStorage() {
  localStorage.removeItem('board')
  localStorage.removeItem('turn')
}
