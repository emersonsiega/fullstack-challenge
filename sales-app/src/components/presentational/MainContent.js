import React from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Main = styled.main`
  margin: 10px;
  margin-top: 65px;
`

const MainContent = ({ children }) => (
  <Main>
    <Row>
      <Col xs="12">{children}</Col>
    </Row>
  </Main>
)

export default MainContent
