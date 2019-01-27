import { showLoading, hideLoading } from 'react-redux-loading'

import OrderService from '../../service/OrderService'
import { cartFinished } from './cart'

const SAVE_ORDER = 'SAVE_ORDER'
const FETCH_ORDERS = 'FETCH_ORDERS'

const actionFetchOrders = orders => ({
  type: FETCH_ORDERS,
  orders,
})

const fetchOrders = () => async dispatch => {
  dispatch(showLoading())

  try {
    const orders = await OrderService.orders()
    dispatch(actionFetchOrders(orders))
  } catch (err) {
    console.error(err)
  }

  dispatch(hideLoading())
}

const actionSaveOrder = order => ({
  type: SAVE_ORDER,
  order,
})

const saveOrder = cart => async dispatch => {
  dispatch(showLoading())

  try {
    const order = await OrderService.saveOrder(cart)
    await dispatch(actionSaveOrder(order))
    await dispatch(cartFinished())
  } catch (err) {
    console.error(err)
  }

  await dispatch(hideLoading())
}

export { SAVE_ORDER, FETCH_ORDERS, saveOrder, fetchOrders }
