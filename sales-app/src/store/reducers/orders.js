import { SAVE_ORDER, FETCH_ORDERS } from '../actions/orders'

const orders = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...action.orders,
      }
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
