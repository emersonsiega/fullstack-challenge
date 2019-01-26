import {
  FETCH_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_QUANTITY,
} from '../actions/cart'

const cart = (state = { items: [], total: 0 }, action) => {
  switch (action.type) {
    case FETCH_CART:
      return {
        ...state,
        ...action.cart,
      }
    case DECREASE_ITEM_QUANTITY:
    case ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [action.item.id]: {
            ...action.item,
          },
        },
        total: action.total,
      }
    case REMOVE_ITEM: {
      delete state.items[action.id]
      return {
        ...state,
        total: action.total,
      }
    }
    default:
      return state
  }
}

export default cart
