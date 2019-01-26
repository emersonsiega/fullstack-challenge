import ProductsService from '../../service/ProductService'

const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

const actionFetchProducts = products => ({
  type: FETCH_PRODUCTS,
  products,
})

const fetchProducts = () => dispatch => {
  return ProductsService.products().then(products =>
    dispatch(actionFetchProducts(products))
  )
}

export { FETCH_PRODUCTS, fetchProducts }
