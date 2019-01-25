import { FETCH_PRODUCTS } from '../actions/products'

const products = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...action.products,
      }
    default:
      return state
  }
}

export default products
