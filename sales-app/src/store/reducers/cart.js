import { FETCH_CART, ADD_ITEM, REMOVE_ITEM } from '../actions/cart'

const cart = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CART:
      return {
        ...state,
        ...action.cart,
      }
    case ADD_ITEM:
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
        },
      }
    case REMOVE_ITEM: {
      delete state[action.id]
      return {
        ...state,
      }
    }
    default:
      return state
  }
}

export default cart
