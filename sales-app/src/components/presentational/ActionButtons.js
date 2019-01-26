import React from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'

import Icon from './Icon'

const ActionButtonStyle = styled(Button)`
  border: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
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

export { AddButton, RemoveButton }
