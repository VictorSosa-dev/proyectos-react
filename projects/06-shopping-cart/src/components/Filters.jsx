import { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export function Filters() {
  //const [minprice, setMinPrice] = useState(0) // esto no es necesario es un estado local
  const { filters, setFilters } = useFilters()

  const minPriceId = useId()
  const categoryId = useId()

  const handleChangeMinPrice = (e) => {
    // aqui algo esta mal
    // estamos pasando la funcion de actualizar estado
    // nativa de React a un componente hijo
    //setMinPrice(e.target.value)
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceId}>Precio minimo: </label>
        <input
          type='range'
          id={minPriceId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryId}>Categoria:</label>
        <select
          id={categoryId}
          onChange={handleChangeCategory}
          value={filters.category}
        >
          <option value='all'>Todas</option>
          <option value='laptops'>Portatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
