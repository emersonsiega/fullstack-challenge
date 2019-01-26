import React from 'react'
import { Input } from 'reactstrap'
import styled from 'styled-components'

import { AddButton, RemoveButton } from './ActionButtons'
import PriceText from './PriceText'
import LabelGroup from './LabelGroup'

const CartActionContainer = styled.div`
  display: flex;
  margin: 5px;
  flex-direction: column;
`

const InputQuantity = styled(Input)`
  margin: 0px 5px 5px 5px;
  padding: 0;
  width: 50px;
  text-align: right;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.darkText};
  border-radius: 0;
  display: inline-flex;
`

const CartActions = ({ item, onAddItem, onDecreaseQuantity }) => {
  return (
    <CartActionContainer>
      <LabelGroup label="Quantidade">
        <AddButton value={item} callback={onAddItem} />
        <InputQuantity type="number" readOnly value={item.quantity} />
        <RemoveButton value={item} callback={onDecreaseQuantity} />
      </LabelGroup>
      <LabelGroup label="Total" className="mt-1">
        <PriceText value={item.total} />
      </LabelGroup>
    </CartActionContainer>
  )
}

export default CartActions
