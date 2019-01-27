import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'

import FlatCard from './FlatCard'
import LabelGroup from './LabelGroup'
import PriceText from './PriceText'
import Icon from './Icon'
import { formatDateTime } from '../../utils/DateTimeFormatter'

const OrderContainer = styled(FlatCard)`
  display: flex;
  flex-direction: row;
  min-height: 80px;
  max-height: 80px;
  box-shadow: 2px 2px 7px 0px ${props => props.theme.shadow};
  margin: 10px;
  justify-content: space-between;
`

const OrderContent = styled.div`
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
  align-items: center;
`

const OrderStatus = styled(FlatCard)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  min-width: 20%;
  max-width: 20%;
  box-shadow: -2px 0px 5px 0px ${props => props.theme.shadow};
  z-index: 1;
  background-color: ${props => props.theme.primary};
  position: relative;
`

const OrderStatusColor = styled.div`
  flex-grow: 1;
  color: ${props => (props.success ? props.theme.success : props.theme.darkText)};
`

const OrderStatusGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
`

const StatusIcon = ({ status }) => {
  const success = status === 'SENT'

  return (
    <OrderStatusColor success={success}>
      {success ? (
        <OrderStatusGroup>
          <h5 className="d-none d-md-flex d-xl-flex">Enviado</h5>
          <Icon name="faShippingFast" size="2x" />
        </OrderStatusGroup>
      ) : (
        <OrderStatusGroup>
          <h5 className="d-none d-md-flex d-xl-flex">Aguardando</h5>
          <Icon name="faPeopleCarry" size="2x" />
        </OrderStatusGroup>
      )}
    </OrderStatusColor>
  )
}

const Order = ({ order }) => {
  const { dateTime, items = [], total = 0.0, status } = order

  return (
    <Row>
      <Col>
        <OrderContainer>
          <OrderContent>
            <LabelGroup label="Data">
              <h5>{formatDateTime(dateTime)}</h5>
            </LabelGroup>
            <LabelGroup label="Quantidade">
              <h5>{items.length} itens</h5>
            </LabelGroup>
            <LabelGroup label="Total">
              <PriceText value={total} />
            </LabelGroup>
          </OrderContent>
          <OrderStatus>
            <LabelGroup label="Status" className="w-100 p-3">
              <StatusIcon status={status} />
            </LabelGroup>
          </OrderStatus>
        </OrderContainer>
      </Col>
    </Row>
  )
}

export default Order
