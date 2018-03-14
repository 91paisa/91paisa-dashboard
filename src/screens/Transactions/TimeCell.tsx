import moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
interface IProps {
  time: string
}
const TimeCell: React.SFC<IProps> = props => (
  <Container>
    <p>{moment(props.time).format('LT')}</p>
    <p>{moment(props.time).format('l')}</p>
  </Container>
)

const Container = styled.p`
  display: block;
  font-size: 1.1rem;
`

export default TimeCell
