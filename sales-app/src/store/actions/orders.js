import { showLoading, hideLoading } from 'react-redux-loading'

import OrderService from '../../service/OrderService'
import { cartFinished } from './cart'

const SAVE_ORDER = 'SAVE_ORDER'

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

export { SAVE_ORDER, saveOrder }
