import React from 'react'
import { connect } from 'react-redux'

import { addItem, removeItem } from '../../store/actions/cart'

import ProductList from '../presentational/ProductList'

const ProductsContainer = ({ products, cartItems, addItem, removeItem }) => {
  return (
    <>
      <ProductList
        products={products}
        cartItems={cartItems}
        onAddItem={addItem}
        onRemoveItem={removeItem}
      />
    </>
  )
}

const mapStateToProps = ({ products = {}, cart = {} }) => ({
  products: Object.values(products),
  cartItems: Object.values(cart).map(item => item.id),
})

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item.id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
