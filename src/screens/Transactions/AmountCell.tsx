import { CSSProperties, default as React } from 'react'
import styled from 'styled-components'
import { graphite } from '../../styles/colors'

interface IProps {
  amount: number
  style?: CSSProperties
}

const AmountCell: React.SFC<IProps> = props => (
  <Container style={props.style}>
    <p
      style={{
        color: graphite,
        fontSize: '66%',
        marginTop: '-0.7%',
      }}
    >
      ₹
    </p>
    <p style={{ fontSize: 'inherit' }}>
      {props.amount.toLocaleString('en-EN', {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      })}
    </p>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: stretch;
  font-size: 1.1rem;
  font-weight: 500;
`

export default AmountCell
