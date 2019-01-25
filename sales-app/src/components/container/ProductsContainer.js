import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchProducts } from '../../store/actions/products'
import ProductList from '../presentational/ProductList'

const ProductsContainer = ({ onLoad, products }) => {
  useEffect(() => {
    onLoad()
  }, [])

  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

const mapStateToProps = ({ products = {} }) => ({ products: Object.values(products) })
const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetchProducts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
