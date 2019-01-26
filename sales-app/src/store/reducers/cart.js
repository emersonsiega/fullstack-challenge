import {
  FETCH_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_QUANTITY,
  CART_FINISHED,
} from '../actions/cart'

const INITIAL_STATE = { items: [], total: 0 }

const cart = (state = INITIAL_STATE, action) => {
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
    case CART_FINISHED:
      return INITIAL_STATE
    default:
      return state
  }
}

export default cart
