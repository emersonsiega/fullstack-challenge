import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import products from './products'
import cart from './cart'
import orders from './orders'

export default combineReducers({
  products,
  orders,
  cart,
  loadingBar: loadingBarReducer,
})
