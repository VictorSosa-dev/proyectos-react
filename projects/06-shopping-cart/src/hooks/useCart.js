import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export function useCart() {
  const context = useContext(CartContext)

  // This is a custom hook, so we can throw an error if the hook is used outside of a provider
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
