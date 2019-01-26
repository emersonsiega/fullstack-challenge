import React from 'react'
import styled from 'styled-components'

import { FinishButton } from './ActionButtons'
import FlatCard from './FlatCard'
import PriceText from './PriceText'
import LabelGroup from './LabelGroup'

const FinishContainer = styled(FlatCard)`
  margin: 20px;
  min-height: 300px;
  padding: 20px;
  color: ${props => props.theme.success};
  box-shadow: 2px 2px 7px 0px ${props => props.theme.shadow};
`

const FinishButtonDiv = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`

const CartFinishContainer = ({ items, total, onSaveOrder }) => (
  <FinishContainer>
    <h4 className="text-center font-weight-bold">FINALIZAR</h4>
    <LabelGroup label="Quantidade">
      <h5 className="font-weight-bold">
        {items.length} {items.length > 1 ? 'ITENS' : 'ITEM'}
      </h5>
    </LabelGroup>
    <LabelGroup label="Total">
      <PriceText value={total} />
    </LabelGroup>
    <FinishButtonDiv>
      <FinishButton value={{ items, total }} callback={onSaveOrder} />
    </FinishButtonDiv>
  </FinishContainer>
)

export default CartFinishContainer
