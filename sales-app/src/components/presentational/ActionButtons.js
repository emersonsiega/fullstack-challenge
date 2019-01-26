import React from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'

import Icon from './Icon'

const ActionButtonStyle = styled(Button)`
  border: none;
`

const onAction = (e, callback, value) => {
  e.preventDefault()
  callback(value)
}

const AddButton = ({ callback, value }) => {
  return (
    <ActionButtonStyle
      size="sm"
      color="success"
      outline
      onClick={e => onAction(e, callback, value)}>
      <Icon name="faPlus" size="2x" />
    </ActionButtonStyle>
  )
}

const RemoveButton = ({ callback, value }) => (
  <ActionButtonStyle
    size="sm"
    color="danger"
    outline
    onClick={e => onAction(e, callback, value)}>
    <Icon name="faMinus" size="2x" />
  </ActionButtonStyle>
)

const FinishButton = ({ callback, value }) => (
  <ActionButtonStyle
    size="sm"
    color="success"
    outline
    onClick={e => onAction(e, callback, value)}>
    <Icon name="faCheckCircle" size="3x" />
  </ActionButtonStyle>
)

export { AddButton, RemoveButton, FinishButton }
