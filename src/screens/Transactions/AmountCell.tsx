import * as React from 'react'
import styled from 'styled-components'

interface IProps {
  amount: number
}

const AmountCell: React.SFC<IProps> = props => (
  <Container>
    {props.amount.toLocaleString('en-EN', {
      currency: 'INR',
      style: 'currency',
    })}
  </Container>
)

const Container = styled.p`
  font-size: 1.1rem;
`

export default AmountCell
