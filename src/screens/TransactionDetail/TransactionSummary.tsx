import moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
import { ITransaction } from '../../api/transaction-api'
import { graphite, positiveGreen } from '../../styles/colors'
import PhoneCell from '../Customers/PhoneCell'
import CompletedTimestamp from './CompletedTimestamp'
import TransactionDetailLine from './TransactionDetailLine'

interface IProps {
  transaction: ITransaction
}

const TransactionSummary: React.SFC<IProps> = props => {
  const {
    customer,
    beneficiary,
    createTimestamp,
    commission,
    amount,
  } = props.transaction

  return (
    <SummaryContainer>
      <div />
      <div />
      <div />
      <Customer>{customer.name}</Customer>
      <Amount>
        {amount.toLocaleString('en-EN', {
          currency: 'INR',
          style: 'currency',
        })}
      </Amount>
      <Beneficiary>{beneficiary.name}</Beneficiary>
      <div />
      <TransactionDetailLine splits={props.transaction.transactionDetails} />
      <div />
      <PhoneCell
        style={{
          alignItems: 'top',
          fontSize: '1.2rem',
          justifyContent: 'flex-end',
          padding: '0 0.8rem',
        }}
        phone={customer.phone}
      />
      <div />
      <PhoneCell
        style={{
          alignItems: 'top',
          fontSize: '1.2rem',
          padding: '0 0.8rem',
        }}
        phone={beneficiary.phone}
      />
      <TimeContainer style={{ alignItems: 'flex-end' }}>
        <TimeLabel>Created</TimeLabel>
        <span>{moment(createTimestamp).format('lll')}</span>
      </TimeContainer>
      <Commission title="Commission">
        {commission.toLocaleString('en-EN', {
          currency: 'INR',
          style: 'currency',
        })}
      </Commission>
      <TimeContainer style={{ justifyContent: 'flex-start' }}>
        <TimeLabel>Completed</TimeLabel>
        <CompletedTimestamp splits={props.transaction.transactionDetails} />
      </TimeContainer>
    </SummaryContainer>
  )
}

const TimeLabel = styled.p`
  color: ${graphite};
`

const TimeContainer = styled.div`
  font-size: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column-reverse;
`

const Commission = styled.p`
  font-size: 1.3rem;
  align-content: stretch;
  color: ${positiveGreen};
  text-align: center;
`

const Amount = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  text-align: center;
`

const Customer = styled.div`
  font-size: 1.3rem;
  align-self: flex-end;
  text-align: end;
  padding: 0 0.8rem;
`
const Beneficiary = styled(Customer)`
  text-align: start;
`

const SummaryContainer = styled.div`
  display: grid;
  margin: 1rem auto 0 auto;
  grid-gap: 0.1rem;
  max-width: 60rem;
  grid-template-rows: 0fr 1fr 0.2rem 1fr 0.5fr;
  grid-template-columns: repeat(3, 1fr);
`

export default TransactionSummary
