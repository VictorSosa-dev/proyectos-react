import { useState } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies({ search }) {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
    searchMovies({ search }).then(setMovies)
  }

  return { movies, getMovies }
}
