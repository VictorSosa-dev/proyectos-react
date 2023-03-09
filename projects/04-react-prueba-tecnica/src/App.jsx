import './App.css'

import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useRandomFact.js'

export function App() {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  function handleClick() {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='fac' />}
    </main>
  )
}
