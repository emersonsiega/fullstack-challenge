import React from 'react'
import styled from 'styled-components'

const Group = styled.div`
  margin: 0;
`

const Label = styled.p`
  margin: 0;
`

const LabelGroup = ({ label, children, ...props }) => (
  <Group {...props}>
    <Label>{label}</Label>
    {children}
  </Group>
)

export default LabelGroup
