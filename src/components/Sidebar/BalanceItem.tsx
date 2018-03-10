import * as React from 'react'
import styled from 'styled-components'
import { IBalance } from '../../api/balances-api'
import { dark, graphite } from '../../styles/colors'
interface IProps extends IBalance {
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
    <FlexRow>
      <Label>{props.label}</Label>
      <Label>{props.timestamp}</Label>
    </FlexRow>
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
  padding: 0 1rem 0.4rem 0.6rem;
`

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`
export default BalanceItem
