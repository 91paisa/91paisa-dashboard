import * as React from 'react'
import styled from 'styled-components'
import { ITransaction } from '../../api/transaction-api'
import { getModeEmoji } from '../../helpers/transaction-helper'
import { fog, graphite } from '../../styles/colors'
import { phone } from '../../styles/screenSize'
import PhoneCell from '../Customers/PhoneCell'
import AmountCell from '../Transactions/AmountCell'
import TimeCell from '../Transactions/TimeCell'
import CompletedTimestamp from './CompletedTimestamp'
import TransactionDetailLine from './TransactionDetailLine'

interface IProps {
  transaction: ITransaction
}

const TransactionSummary: React.SFC<IProps> = props => {
  const {
    customer,
    beneficiary,
    createdTimestamp,
    commission,
    amount,
    mode,
  } = props.transaction

  return (
    <>
      <SummaryContainer>
        <div />
        <div />
        <div />
        <Customer>{customer.name}</Customer>
        <AmountCell
          amount={amount}
          style={{
            alignSelf: 'center',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            justifyContent: 'center',
          }}
        />
        <Beneficiary>{beneficiary.name}</Beneficiary>
        <div />
        <TransactionDetailLine splits={props.transaction.transactionDetails} />
        <div />
        <PhoneCell
          style={{
            alignItems: 'top',
            fontSize: '1rem',
            justifyContent: 'flex-end',
            padding: '0 0.8rem',
          }}
          phone={customer.phone}
        />
        <div />
        <PhoneCell
          style={{
            alignItems: 'top',
            fontSize: '1rem',
            padding: '0 0.8rem',
          }}
          phone={beneficiary.phone}
        />
        <TimeContainer style={{ alignItems: 'flex-end' }}>
          <TimeLabel>Created</TimeLabel>
          <TimeCell time={createdTimestamp} style={{ textAlign: 'right' }} />
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
      <Mode mode={mode}>
        {getModeEmoji(mode)}
        {mode}
      </Mode>
    </>
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
  color: ${graphite};
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
  grid-template-rows: 0 1fr 0.2rem 1fr 0.5fr;
  grid-template-columns: repeat(3, 1fr);
  @media (${phone}) {
    grid-template-rows: 0 1fr 0.2rem 1fr 0.5fr;
    grid-template-columns: 1fr 0.5fr 1fr;
  }
`

const Mode: any = styled.p`
  text-transform: uppercase;
  color: ${graphite};
  border-radius: 0.5rem;
  margin: auto;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0 0.2rem;
  border-color: ${fog};
  letter-spacing: 0.2rem;
  border-width: 1px;
  border-style: dashed;
`

export default TransactionSummary
