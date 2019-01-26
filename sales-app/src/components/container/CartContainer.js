import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { removeItem, addItem } from '../../store/actions/cart'
import { saveOrder } from '../../store/actions/orders'
import { showMessage } from '../presentational/Toast'

import Cart from '../presentational/Cart'

const CartContainer = ({
  items = [],
  total = 0,
  onRemoveItem,
  onAddItem,
  onDecreaseQuantity,
  onSaveOrder,
}) => (
  <Cart
    items={items}
    total={total}
    onRemoveItem={onRemoveItem}
    onAddItem={onAddItem}
    onDecreaseQuantity={onDecreaseQuantity}
    onSaveOrder={onSaveOrder}
  />
)

const mapDispatchToProps = (dispatch, { history }) => ({
  onRemoveItem: item => dispatch(removeItem(item.id)),
  onAddItem: item => dispatch(addItem(item)),
  onDecreaseQuantity: item => dispatch(removeItem(item.id, false)),
  onSaveOrder: async cart => {
    await dispatch(saveOrder(cart))
    history.push('/orders')
    showMessage('Pedido realizado!', 'Estamos separando seus produtos', 'faPeopleCarry')
  },
})

const mapStateToProps = ({ cart = {} }) => ({
  items: Object.values(cart.items),
  total: cart.total,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartContainer)
)
