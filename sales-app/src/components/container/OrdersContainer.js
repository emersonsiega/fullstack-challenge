import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchOrders } from '../../store/actions/orders'
import OrdersList from '../presentational/OrdersList'

const OrdersContainer = ({ onLoad, orders = [] }) => {
  useEffect(() => {
    onLoad()
  }, [])

  return <OrdersList orders={orders} />
}

const mapStateToProps = ({ orders = {} }) => ({ orders: Object.values(orders) })

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetchOrders()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersContainer)
