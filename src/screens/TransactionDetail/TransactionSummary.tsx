import moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
import {
  ISplitTransaction,
  ITransaction,
  splitTransactionStatus,
} from '../../api/transaction-api'
import Card from '../../components/Card'
import { dark, graphite, positiveGreen } from '../../styles/colors'
import PhoneCell from '../Customers/PhoneCell'
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
    updatedTimestamp,
  } = props.transaction

  function getCompletedTimestamp(splits: ISplitTransaction[] | undefined) {
    if (
      splits &&
      splits.filter(split => split.status !== splitTransactionStatus.success)
        .length > 0
    ) {
      return <p style={{ letterSpacing: '6px' }}>---</p>
    }
    return <Time>{moment(updatedTimestamp).format('lll')}</Time>
  }

  return (
    <Card>
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
          <Time>{moment(createTimestamp).format('lll')}</Time>
        </TimeContainer>
        <Commission title="Commission">
          {commission.toLocaleString('en-EN', {
            currency: 'INR',
            style: 'currency',
          })}
        </Commission>
        <TimeContainer style={{ justifyContent: 'flex-start' }}>
          <TimeLabel>Completed</TimeLabel>
          {getCompletedTimestamp(props.transaction.transactionDetails)}
        </TimeContainer>
      </SummaryContainer>
    </Card>
  )
}
const TimeLabel = styled.p`
  color: ${graphite};
`
const Time = styled.p`
  color: ${dark};
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
