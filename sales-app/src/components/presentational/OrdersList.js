import React from 'react'
import styled from 'styled-components'

import Order from './Order'
import EmptyList from './EmptyList'
import { RefreshButton } from './ActionButtons'

const OrdersContainer = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
`

const TitleContainer = styled.div`
  display: inline-flex;
  align-items: baseline;
`

const Title = styled.h3`
  color: ${props => props.theme.darkText};
  margin-right: 10px;
`

const RefreshButtonFloat = styled(RefreshButton)`
  margin-left: auto;
  margin-right: 20px;
`

const OrdersList = ({ orders, onRefresh }) => {
  if (orders.length === 0) {
    return <EmptyList text="Nenhum pedido encontrado" icon="faBoxOpen" />
  }

  return (
    <OrdersContainer>
      <TitleContainer>
        <Title>Meus pedidos</Title>
        {orders.length > 0 && <span>{orders.length} pedidos realizados</span>}
        <RefreshButtonFloat callback={onRefresh} />
      </TitleContainer>
      {orders.map(order => (
        <Order key={order.id} order={order} />
      ))}
    </OrdersContainer>
  )
}

export default OrdersList
