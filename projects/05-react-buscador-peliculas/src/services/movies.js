const API_KEY = 'd53e1e9f'

export function searchMovies({ search }) {
  if (search === '') return null
  try {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
      .then((res) => res.json())
      .then((json) => {
        const movies = json.Search
        return movies?.map((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
        }))
      })
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
