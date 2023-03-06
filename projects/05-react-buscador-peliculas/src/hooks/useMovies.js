import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      searchMovies({ search }).then(setMovies)
    } catch (error) {
      setError(error.mesagge)
      setMovies([])
    } finally {
      // tanton en try como en catch se ejecuta finally
      setLoading(false)
    }
  }, [])

  /* const sortMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies */

  const sortMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortMovies, getMovies, loading }
}
