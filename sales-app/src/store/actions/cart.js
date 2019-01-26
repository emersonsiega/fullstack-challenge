import CartLocalService from '../../service/CartLocalService'
import { showLoading, hideLoading } from 'react-redux-loading'

const FETCH_CART = 'FETCH_CART'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY'

const actionFetchCart = cart => ({
  type: FETCH_CART,
  cart,
})

const fetchCart = () => dispatch => {
  return CartLocalService.cart().then(cart => dispatch(actionFetchCart(cart)))
}

const actionAddItem = (item, total) => ({
  type: ADD_ITEM,
  item,
  total,
})

const addItem = item => async dispatch => {
  dispatch(showLoading())

  try {
    const [cart, newItem] = await CartLocalService.addItem(item)
    await dispatch(actionAddItem(newItem, cart.total))
  } catch (err) {
    console.log(err)
  }

  dispatch(hideLoading())
}

const actionDecreaseQuantity = (item, total) => ({
  type: DECREASE_ITEM_QUANTITY,
  item,
  total,
})

const actionRemove = (id, total) => ({
  type: REMOVE_ITEM,
  id,
  total,
})

const removeItem = (id, remove = true) => async dispatch => {
  try {
    const cart = await CartLocalService.removeItem(id, remove)

    if (!remove && cart.items[id]) {
      await dispatch(actionDecreaseQuantity(cart.items[id], cart.total))
    } else {
      await dispatch(actionRemove(id, cart.total))
    }
  } catch (err) {
    console.log(err)
  }
}

export {
  FETCH_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_QUANTITY,
  fetchCart,
  addItem,
  removeItem,
}
