import { useState, useRef, useEffect } from 'react'
import './App.css'

import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/movies.jsx'

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
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    // Devuelve un array con los valores de los campos del formulario
    //const { query } = Object.fromEntries(new window.FormData(event.target))
    // const filds = new window.FormData(event.target)
    console.log(search)
    getMovies()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery === '') return
    updateSearch(newQuery)
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
          <button>Buscar</button>
        </form>
      </header>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
