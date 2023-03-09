import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header'

function useFilter({ product }) {
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })

  const filtereProducts = (products) => {
    return products?.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === 'all' || product.category === filter.category)
      )
    })
  }

  return [setFilter, filtereProducts]
}

function App() {
  const [products] = useState(initialProducts)

  const [setFilter, filtereProducts] = useFilter({ product: products })

  const filteredProducts = filtereProducts(products)

  return (
    <>
      <Header changeFilter={setFilter} />
      <Products products={filteredProducts} />
      <Footer></Footer>
    </>
  )
}

export default App
