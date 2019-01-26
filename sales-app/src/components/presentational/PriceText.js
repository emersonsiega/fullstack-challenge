import React from 'react'
import styled from 'styled-components'

const Price = styled.h5`
  font-weight: bold;

  &::before {
    content: 'R$ ';
  }
`

const PriceText = ({ value = 0.0 }) => <Price>{Number(value).toFixed(2)}</Price>

export default PriceText
