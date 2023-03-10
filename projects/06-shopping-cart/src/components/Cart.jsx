import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import './Cart.css'
import { useCart } from '../hooks/useCart.js'

function CartItem({ product, addToCart }) {
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - {product.price}
      </div>
      <footer>
        <div>
          <button onClick={addToCart}>+</button>
        </div>
        <div>
          <small>{product.quantity}</small>
        </div>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>
        <div>
          <button onClick={() => clearCart()}>
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </>
  )
}
