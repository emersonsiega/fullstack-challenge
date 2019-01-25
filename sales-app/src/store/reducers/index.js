import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import products from './products'

export default combineReducers({
  products,
  loadingBar: loadingBarReducer,
})
