import { fetchCart } from './cart'
import { fetchProducts } from './products'
import { showLoading, hideLoading } from 'react-redux-loading'

const FETCH_ALL = 'FETCH_ALL'

const fetchAll = () => async dispatch => {
  try {
    dispatch(showLoading())

    await dispatch(fetchProducts())
    await dispatch(fetchCart())

    dispatch(hideLoading())
  } catch (err) {
    console.error(err)
    dispatch(hideLoading())
  }
}

export { FETCH_ALL, fetchAll }
