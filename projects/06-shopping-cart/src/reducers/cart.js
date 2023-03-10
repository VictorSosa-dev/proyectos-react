export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

export const ACTION_CART_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case ACTION_CART_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      // 1 - Check if the product is already in the cart
      const productInCart = state.findIndex((item) => item.id === id)

      // 2 - If it is, update the quantity
      if (productInCart !== -1) {
        // 😎 Usando structuredClone
        /* const newState = structuredClone(state)
        newState[productInCart].quantity += 1 */

        // 👶 Usando map
        /* const newState = state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
        }) */

        // ⚡️ Usando slice + spread
        const newState = [
          ...state.slice(0, productInCart),
          {
            ...state[productInCart],
            quantity: state[productInCart].quantity + 1
          },
          ...state.slice(productInCart + 1)
        ]

        updateLocalStorage(newState)
        return newState
      }

      // 3 - If it isn't, add it to the cart
      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }
    case ACTION_CART_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const newState = state.filter((item) => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    case ACTION_CART_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
  }

  return state
}
