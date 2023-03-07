import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header'
function App() {
  const [products] = useState(initialProducts)

  const [filter, setFilter] = useState({
    category: 'laptops',
    minPrice: 0,
  })

  const filtereProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === 'all' || product.category === filter.category)
      )
    })
  }

  const filteredProducts = filtereProducts(products)

  return (
    <>
      <Header filter={filter} setFilter={setFilter} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
