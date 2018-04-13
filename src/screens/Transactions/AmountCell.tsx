import * as React from 'react'
import styled from 'styled-components'

interface IProps {
  amount: number
  style?: any
}

const AmountCell: React.SFC<IProps> = props => (
  <Container style={props.style}>
    <p style={{ fontSize: '0.5rem', paddingBottom: '0.5rem' }}>₹</p>
    <p>
      {props.amount.toLocaleString('en-EN', {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      })}
    </p>
  </Container>
)

const Container = styled.div`
  display: flex;
  font-size: 1.1rem;
`

export default AmountCell
