import styled from 'styled-components'
import { Card } from 'reactstrap'

const FlatCard = styled(Card)`
  margin: 0;
  border-radius: 0px;
  border: none;
  background-color: ${props => props.theme.cardBackground};
`

export default FlatCard
