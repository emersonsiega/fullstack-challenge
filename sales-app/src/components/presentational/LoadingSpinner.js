import React from 'react'
import { Spinner } from 'reactstrap'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 50px;
  left: 10px;
`

const LoadingMessage = styled.span`
  color: ${props => props.theme.darkText};
  font-size: 13px;
  margin-left: 10px;
`

const LoadingSpiner = () => (
  <LoadingContainer>
    <Spinner type="grow" size="sm" color="danger" />
    <LoadingMessage>Carregando...</LoadingMessage>
  </LoadingContainer>
)

export default LoadingSpiner
