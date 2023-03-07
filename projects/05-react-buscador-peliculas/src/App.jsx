import { useState, useRef, useEffect, useCallback } from 'react'
import './App.css'

import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/movies.jsx'
import debounce from 'just-debounce-it'

const useSearch = () => {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula sin nombre')
      return
    }
    // regex numeros
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con caracteres especiales')
      return
    }

    if (search.length < 3) {
      setError('No se puede buscar una pelicula con menos de 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log('debouncedGetMovies', search)
      getMovies({ search })
    }, 2000),
    [getMovies],
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    // Devuelve un array con los valores de los campos del formulario
    //const { query } = Object.fromEntries(new window.FormData(event.target))
    // const filds = new window.FormData(event.target)
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery === '') return
    updateSearch(newQuery)
    //getMovies({ search: newQuery })
    debouncedGetMovies(newQuery)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className="container-fluid page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
            name="query"
            onChange={handleChange}
            type="text"
            placeholder="At-Man, The Whale "
          />
          <input type="checkbox" onChange={handleSort} />
          <button>Buscar</button>
        </form>
      </header>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
