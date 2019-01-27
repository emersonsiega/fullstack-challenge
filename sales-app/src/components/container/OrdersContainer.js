import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchOrders } from '../../store/actions/orders'
import OrdersList from '../presentational/OrdersList'

const OrdersContainer = ({ onLoad, isLoading = true, orders = [] }) => {
  useEffect(() => {
    onLoad()
  }, [])

  return <OrdersList orders={orders} isLoading={isLoading} onRefresh={onLoad} />
}

const mapStateToProps = ({ orders = {}, loadingBar }) => ({
  orders: Object.values(orders),
  isLoading: loadingBar.default > 0,
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetchOrders()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersContainer)
