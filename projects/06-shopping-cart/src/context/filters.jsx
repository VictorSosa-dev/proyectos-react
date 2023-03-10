import { createContext, useState } from 'react'

//Singleton pattern -> module javascript

// 1 - Create a context
// Este es el que debemos consumir en los componentes
export const FiltersContext = createContext() // solo se crea una vez

// 2 - Create a provider, para proveer el contexto
// Este es el que nos provee de acceso al contexto
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
