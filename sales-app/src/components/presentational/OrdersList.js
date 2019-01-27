import React from 'react'
import styled from 'styled-components'

import Order from './Order'
import EmptyList from './EmptyList'

const OrdersContainer = styled.div`
  display: flex;
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

const OrdersList = ({ orders }) => {
  if (orders.length === 0) {
    return <EmptyList text="Nenhum pedido encontrado" icon="faBoxOpen" />
  }

  return (
    <OrdersContainer>
      <TitleContainer>
        <Title>Meus pedidos</Title>
        {orders.length > 0 && <span>{orders.length} pedidos realizados</span>}
      </TitleContainer>
      {orders.map(order => (
        <Order key={order.id} order={order} />
      ))}
    </OrdersContainer>
  )
}

export default OrdersList
