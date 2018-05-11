import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ISplitTransaction, ITransaction } from '../../api/transaction-api'
import {
  DesktopBrowser,
  PhoneOrTabletBrowser,
} from '../../components/BrowserContainer'
import { default as Space, SpaceEnum } from '../../components/Space'
import { getDDMMYY } from '../../helpers/time-helper'
import { isTransactionComplete } from '../../helpers/transaction-helper'
import { dark, primaryLight } from '../../styles/colors'
import { isPhoneOrTable } from '../../styles/screenSize'
import PhoneCell from '../Customers/PhoneCell'
import AmountCell from './AmountCell'
import TimeCell from './TimeCell'
import TransactionStatusCell from './TransactionStatusCell'

interface IProps {
  transaction: ITransaction
}
class TransactionItem extends React.Component<IProps> {
  public render() {
    const { transaction } = this.props
    return (
      <>
        <PhoneOrTabletBrowser>
          {this.renderTablet(transaction)}
        </PhoneOrTabletBrowser>
        <DesktopBrowser>{this.renderDesktop(transaction)}</DesktopBrowser>
      </>
    )
  }

  private renderTablet = (t: ITransaction) => (
    <TabletContainer to={`/transactions/${t.id}`}>
      <AmountCell style={{ fontWeight: 'bold' }} amount={t.amount} />
      <div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 0.3fr 1fr',
            gridTemplateRows: 'auto',
          }}
        >
          <Name>{t.customer.name}</Name>
          <span>➡</span>
          <Name>{t.beneficiary.name}</Name>
          <Name>{getDDMMYY(t.createdTimestamp)}</Name>
          <span>➡</span>
          <div>
            <Name>
              {isTransactionComplete(
                t.transactionDetails as ISplitTransaction[],
              )
                ? getDDMMYY(t.updatedTimestamp)
                : '- - -'}
            </Name>
          </div>
        </div>
      </div>
      <TransactionStatusCell {...t} />
    </TabletContainer>
  )

  private renderDesktop = (t: ITransaction) => (
    <DesktopContainer to={`/transactions/${t.id}`}>
      <AmountCell amount={t.amount} style={{ fontSize: '1.3rem' }} />
      <div>
        <Name>{t.customer.name}</Name>
        {!isPhoneOrTable() && <Space height={SpaceEnum.s} />}
        <PhoneCell phone={t.customer.phone} />
      </div>
      <div>
        <Name>{t.beneficiary.name}</Name>
        {!isPhoneOrTable() && <Space height={SpaceEnum.s} />}
        <PhoneCell phone={t.beneficiary.phone} />
      </div>
      {!isPhoneOrTable() && (
        <>
          <TimeCell time={t.createdTimestamp} space={SpaceEnum.s} />
          <TimeCell time={t.updatedTimestamp} space={SpaceEnum.s} />
        </>
      )}
      <TransactionStatusCell {...t} />
    </DesktopContainer>
  )
}
const Name = styled.p`
  text-transform: capitalize;
  font-size: 1rem;
`

const DesktopContainer = styled(Link)`
  margin: auto;
  padding: 0 1rem;
  display: grid;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${dark};
  grid-template-columns:
    minmax(100px, 0.4fr) minmax(140px, 0.6fr) minmax(140px, 0.6fr) minmax(
      100px,
      0.4fr
    )
    minmax(100px, 0.4fr)
    minmax(100px, 2fr);
  height: 100%;
  &:hover {
    background: ${primaryLight};
  }
`

const TabletContainer = styled(Link)`
  margin: auto;
  align-items: center;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: 0.6fr 0.5fr;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  color: ${dark};
  height: 100%;
  &:hover {
    background: ${primaryLight};
  }
`

export default TransactionItem
