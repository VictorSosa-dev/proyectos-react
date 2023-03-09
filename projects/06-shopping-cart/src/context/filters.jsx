import { useContext } from 'react'

// 1 - Create a context
export const FiltersContext = createContext()

// 2 - Create a provider, para proveer el contexto

export const FiltersProvider = ({ children }) => {
  return (
    <FiltersContext.Provider
      value={{
        catergory: 'all',
        minPrice: 0
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
