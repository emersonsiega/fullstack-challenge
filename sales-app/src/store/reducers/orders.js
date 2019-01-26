import { SAVE_ORDER } from '../actions/orders'

const orders = (state = {}, action) => {
  switch (action.type) {
    case SAVE_ORDER:
      return {
        ...state,
        [action.order.id]: {
          ...action.order,
        },
      }
    default:
      return state
  }
}

export default orders
