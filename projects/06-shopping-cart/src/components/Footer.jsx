import { useCart } from '../hooks/useCart.js'
import { useFilters } from '../hooks/useFilters.js'
import './Footer.css'

export function Footer() {
  //const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️</h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      {
        //JSON.stringify(filters)
      }
      {
        //JSON.stringify(cart, null, 2)
      }
    </footer>
  )
}
