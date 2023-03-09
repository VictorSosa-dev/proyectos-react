import { useState, useId } from 'react'
import './Filters.css'

export function Filters({ onChange }) {
  const [minprice, setMinPrice] = useState(0)
  const minPriceId = useId()
  const categoryId = useId()

  const handleChangeMinPrice = (e) => {
    // aqui algo esta mal
    // estamos pasando la funcion de actualizar estado
    // nativa de React a un componente hijo
    setMinPrice(e.target.value)
    onChange((prevState) => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    onChange((prevState) => ({
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
        />
        <span>${minprice}</span>
      </div>

      <div>
        <label htmlFor={categoryId}>Categoria:</label>
        <select id={categoryId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
