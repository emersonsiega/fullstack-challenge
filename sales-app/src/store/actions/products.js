import { showLoading, hideLoading } from 'react-redux-loading'

import ProductsService from '../../service/ProductService'

const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

const actionFetchProducts = products => ({
  type: FETCH_PRODUCTS,
  products,
})

const fetchProducts = () => dispatch => {
  dispatch(showLoading())
  ProductsService.products()
    .then(p => {
      dispatch(actionFetchProducts(p))
      dispatch(hideLoading())
    })
    .catch(err => {
      console.error(err)
      dispatch(hideLoading())
    })
}

export { FETCH_PRODUCTS, fetchProducts }
