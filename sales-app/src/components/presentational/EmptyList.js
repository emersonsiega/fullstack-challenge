import React from 'react'
import styled from 'styled-components'

import Icon from './Icon'

const Centered = styled.div`
  margin-top: 35vh;
`

const EmptyList = ({ text, icon }) => (
  <Centered className="text-center mt-10">
    <Icon name={icon} size="3x" />
    <h5 className="font-weight-bold">{text}</h5>
  </Centered>
)

export default EmptyList
