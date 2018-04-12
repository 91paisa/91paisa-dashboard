import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ITransaction } from '../../../api/transaction-api'
import Space, { SpaceEnum } from '../../../components/Space'
import { dark, primaryHover } from '../../../styles/colors'
import { isPhoneOrTable, phone } from '../../../styles/screenSize'
import PhoneCell from '../../Customers/PhoneCell'
import AmountCell from '../../Transactions/AmountCell'
import TimeCell from '../../Transactions/TimeCell'
import TransactionStatusCell from '../../Transactions/TransactionStatusCell'

interface IProps {
  transaction: ITransaction
}
class CustomerTransactionItem extends React.Component<IProps> {
  public render() {
    const { transaction } = this.props
    return (
      <Container to={`/transactions/${transaction.id}`}>
        <AmountCell
          amount={transaction.amount}
          style={{ fontSize: '1.5rem' }}
        />
        <div>
          <Name>{transaction.beneficiary.name}</Name>
          {!isPhoneOrTable() && <Space height={SpaceEnum.s} />}
          <PhoneCell phone={transaction.beneficiary.phone} />
        </div>
        {!isPhoneOrTable() && (
          <TimeCell time={transaction.createdTimestamp} space={SpaceEnum.s} />
        )}
        <TransactionStatusCell
          splits={transaction.transactionDetails}
          nodal={transaction.nodal}
        />
      </Container>
    )
  }
}
const Name = styled.p`
  text-transform: capitalize;
  font-size: 1.1rem;
`

const Container = styled(Link)`
  margin: auto;
  padding: 0 1rem;
  display: grid;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${dark};
  grid-template-columns:
    minmax(100px, 0.5fr) minmax(140px, 0.7fr) minmax(100px, 0.5fr)
    minmax(100px, 2fr);
  height: 100%;
  @media (${phone}) {
    grid-template-columns: 0.6fr 1fr 0.5fr -1;
  }
  &:hover {
    background: ${primaryHover};
  }
`

export default CustomerTransactionItem
