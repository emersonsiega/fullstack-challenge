import React from 'react'
import styled from 'styled-components'

import FlatCard from './FlatCard'

const CardContainer = styled(FlatCard)`
  display: flex;
  flex-direction: row;
  min-height: 250px;
  box-shadow: 2px 2px 7px 0px ${props => props.theme.shadow};
  margin: 20px;
`

const CardBackground = styled(FlatCard)`
  background-color: ${props => props.theme.cardBackground};
  flex-grow: 2;
  padding: 10px;
`

const CardPrimary = styled(FlatCard)`
  background-color: ${props => props.theme.primary};
  flex-grow: 1;
  box-shadow: 2px 0px 5px 0px ${props => props.theme.shadow};
  z-index: 1;
  padding: 10px;
`

const Product = () => (
  <CardContainer>
    <CardPrimary>photo...</CardPrimary>
    <CardBackground>text...</CardBackground>
  </CardContainer>
)

export default Product
