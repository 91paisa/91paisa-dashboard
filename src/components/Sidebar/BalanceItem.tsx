import * as React from 'react'
import styled from 'styled-components'
import { dark, graphite } from '../../styles/colors'
interface IProps {
  amount: number
  label: string
}
const BalanceItem: React.SFC<IProps> = (props: IProps) => (
  <div>
    {props.amount && (
      <Amount>
        {props.amount.toLocaleString('en-IN', {
          currency: 'INR',
          style: 'currency',
        })}
      </Amount>
    )}
    <Label>{props.label}</Label>
  </div>
)
const Amount = styled.p`
  font-size: 1.5rem;
  color: ${dark};
  letter-spacing: 2px;
  padding: 1rem 0.2rem 0 1rem;
`
const Label = styled.p`
  font-size: 0.6rem;
  color: ${graphite};
  letter-spacing: 2px;
  padding: 0 0 0.4rem 1rem;
`
export default BalanceItem
