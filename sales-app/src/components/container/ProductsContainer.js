import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchProducts } from '../../store/actions/products'
import Product from '../presentational/Product'

const ProductsContainer = props => {
  useEffect(() => {
    props.onLoad()
  }, [])

  return (
    <div>
      <Product />
    </div>
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetchProducts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
