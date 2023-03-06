import { useState } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = () => {
    try {
      setLoading(true)
      setError(null)
      searchMovies({ search }).then(setMovies)
    } catch (error) {
      setError(error.mesagge)
      setMovies([])
    } finally {
      // tanton en try como en catch se ejecuta finally
      setLoading(false)
    }
  }

  return { movies, loading, getMovies }
}
