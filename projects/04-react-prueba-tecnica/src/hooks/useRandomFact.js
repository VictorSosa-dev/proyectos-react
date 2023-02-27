import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

// Custome hook
export function useCatFact() {
  const [fact, setFact] = useState() // state
  // para recuperar el fact
  const refreshRandomFact = () => getRandomFact().then(setFact) // request fech
  // const refreshRandomFact = () => { getRandomFact().then(newFact => setFact(newFact))}

  // use Efect
  useEffect(refreshRandomFact, [])

  // nunca devolverl el estado de actualizacion del estado
  return { fact, refreshRandomFact }
}
