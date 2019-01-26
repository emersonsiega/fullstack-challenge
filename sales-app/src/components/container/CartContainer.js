import React from 'react'
import { connect } from 'react-redux'

import { removeItem, addItem } from '../../store/actions/cart'

import Cart from '../presentational/Cart'

const CartContainer = ({
  items = [],
  total = 0,
  onRemoveItem,
  onAddItem,
  onDecreaseQuantity,
}) => (
  <Cart
    items={items}
    total={total}
    onRemoveItem={onRemoveItem}
    onAddItem={onAddItem}
    onDecreaseQuantity={onDecreaseQuantity}
  />
)

const mapDispatchToProps = dispatch => ({
  onRemoveItem: item => dispatch(removeItem(item.id)),
  onAddItem: item => dispatch(addItem(item)),
  onDecreaseQuantity: item => dispatch(removeItem(item.id, false)),
})

const mapStateToProps = ({ cart = {} }) => ({
  items: Object.values(cart.items),
  total: cart.total,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
