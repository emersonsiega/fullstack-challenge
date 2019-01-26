import React from 'react'
import styled from 'styled-components'

import FlatCard from './FlatCard'
import { AddButton, RemoveButton } from './ActionButtons'
import PriceText from './PriceText'
import LabelGroup from './LabelGroup'

const CardContainer = styled(FlatCard)`
  display: flex;
  flex-direction: row;
  min-height: ${props => props.height}px;
  max-height: ${props => props.height}px;
  box-shadow: 2px 2px 7px 0px ${props => props.theme.shadow};
  margin: 20px;
`

const CardContent = styled(FlatCard)`
  flex-grow: 2;
  padding: 10px;
`

const CardPrimary = styled(FlatCard)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  min-width: ${props => props.primarywidth}%;
  max-width: ${props => props.primarywidth}%;
  box-shadow: 2px 0px 5px 0px ${props => props.theme.shadow};
  z-index: 1;
  background-color: ${props => props.theme.primary};
  position: relative;
`

const ActionContent = styled(CardPrimary)`
  box-shadow: -2px 0px 5px 0px ${props => props.theme.shadow};
`

const Image = styled.img`
  width: auto;
  max-height: 90%;
  position: absolute;
`

const Name = styled.h5`
  color: ${props => props.theme.primary};
`

const Description = styled.p`
  color: ${props => props.theme.darkText};
`

const Group = styled.div`
  margin-top: auto;
`

const CardContentAction = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const CardActions = styled.div`
  flex-grow: 1;
`

const CardProduct = ({
  product,
  showAdd = false,
  showRemove = false,
  showDetails = true,
  onAddItem,
  onRemoveItem,
  height = 250,
  primarywidth = 30,
  actionContent,
  actionWidth = 20,
}) => (
  <CardContainer height={height}>
    <CardPrimary primarywidth={primarywidth}>
      <Image src={product.imageURL} alt={product.name} />
    </CardPrimary>
    <CardContent>
      <Name>{product.name}</Name>
      {showDetails && <Description>{product.description}</Description>}
      <Group>
        <LabelGroup label="Valor unitário">
          <PriceText value={product.price} />
        </LabelGroup>
      </Group>
      {(showRemove || showAdd) && (
        <CardContentAction>
          {showRemove && <RemoveButton value={product} callback={onRemoveItem} />}
          {showAdd && <AddButton value={product} callback={onAddItem} />}
        </CardContentAction>
      )}
    </CardContent>
    {actionContent && (
      <ActionContent primarywidth={actionWidth}>
        <CardActions>{actionContent}</CardActions>
      </ActionContent>
    )}
  </CardContainer>
)

export default CardProduct
