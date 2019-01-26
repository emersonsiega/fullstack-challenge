import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import products from './products'
import cart from './cart'

export default combineReducers({
  products,
  cart,
  loadingBar: loadingBarReducer,
})
