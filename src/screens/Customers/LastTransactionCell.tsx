import moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
import { ILastTransaction } from '../../api/customer-api'
import { grey } from '../../styles/colors'

interface IProps {
  lastTransaction: ILastTransaction
}

const LastTransactionCell: React.SFC<IProps> = props => {
  return props.lastTransaction ? (
    <FlexContainer>
      <FlexColumnAmount>
        {props.lastTransaction.amount.toLocaleString('en-US', {
          currency: 'INR',
          style: 'currency',
        })}
      </FlexColumnAmount>
      <FlexColumnDate>
        {`${moment(props.lastTransaction.createdTimestamp).format(
          'DD/MM/YYYY',
        )}`}
      </FlexColumnDate>
      <FlexColumnDate>
        {`${moment(props.lastTransaction.createdTimestamp).format('LT')}`}
      </FlexColumnDate>
    </FlexContainer>
  ) : (
    <Blank>----</Blank>
  )
}
export default LastTransactionCell
const FlexContainer = styled.div`
  display: flex;
`
const FlexColumnAmount = styled.p`
  font-weight: 600;
  font-size: 1rem;
`
const FlexColumnDate = styled.p`
  font-weight: 500;
  padding-left: 2.4rem;
  font-size: 0.9rem;
`

const Blank = styled.p`
  color: ${grey};
  letter-spacing: 4px;
`
