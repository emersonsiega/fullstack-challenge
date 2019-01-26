import CartLocalService from '../../service/CartLocalService'
import { showLoading, hideLoading } from 'react-redux-loading'

const FETCH_CART = 'FETCH_CART'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

const actionFetchCart = cart => ({
  type: FETCH_CART,
  cart,
})

const fetchCart = () => dispatch => {
  return CartLocalService.items().then(cart => dispatch(actionFetchCart(cart)))
}

const actionAddItem = item => ({
  type: ADD_ITEM,
  item,
})

const addItem = item => async dispatch => {
  dispatch(showLoading())
  await dispatch(actionAddItem(item))

  try {
    await CartLocalService.addItem(item)
  } catch (err) {
    console.log(err)
    await dispatch(removeItem(item.id))
  }

  dispatch(hideLoading())
}

const actionRemoveItem = id => ({
  type: REMOVE_ITEM,
  id,
})

const removeItem = id => async dispatch => {
  await dispatch(actionRemoveItem(id))
  try {
    await CartLocalService.removeItem(id)
  } catch (err) {
    console.log(err)
  }
}

export { FETCH_CART, fetchCart }
export { ADD_ITEM, addItem }
export { REMOVE_ITEM, removeItem }
