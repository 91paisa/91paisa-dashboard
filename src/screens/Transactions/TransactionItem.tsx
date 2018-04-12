import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  INodal,
  ISplitTransaction,
  ITransaction,
} from '../../api/transaction-api'
import {
  DesktopBrowser,
  PhoneOrTabletBrowser,
} from '../../components/BrowserContainer'
import { default as Space, SpaceEnum } from '../../components/Space'
import { getDDMMYYYY } from '../../helpers/time-helper'
import { isTransactionComplete } from '../../helpers/transaction-helper'
import { dark, primaryHover } from '../../styles/colors'
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
    const {
      amount,
      id,
      customer,
      beneficiary,
      createdTimestamp,
      transactionDetails,
      updatedTimestamp,
      nodal,
    } = this.props.transaction
    return (
      <>
        <PhoneOrTabletBrowser>
          {this.renderTablet(
            id,
            amount,
            customer,
            beneficiary,
            createdTimestamp,
            updatedTimestamp,
            transactionDetails as ISplitTransaction[],
            nodal,
          )}
        </PhoneOrTabletBrowser>
        <DesktopBrowser>
          {this.renderDesktop(
            id,
            amount,
            customer,
            beneficiary,
            createdTimestamp,
            updatedTimestamp,
            transactionDetails as ISplitTransaction[],
            nodal,
          )}
        </DesktopBrowser>
      </>
    )
  }

  private renderTablet = (
    id: string,
    amount: number,
    customer: { name: string; phone: string },
    beneficiary: { name: string; phone: string },
    createdTimestamp: string,
    updatedTimestamp: string,
    transactionDetails: ISplitTransaction[],
    nodal: INodal,
  ) => (
    <TabletContainer to={`/transactions/${id}`}>
      <AmountCell style={{ fontWeight: '600' }} amount={amount} />
      <div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 0.3fr 1fr',
            gridTemplateRows: 'auto',
          }}
        >
          <Name>{customer.name}</Name>
          <span>➡</span>
          <Name>{beneficiary.name}</Name>
          <Name>{getDDMMYYYY(createdTimestamp)}</Name>
          <span>➡</span>
          <div>
            <Name>
              {isTransactionComplete(transactionDetails)
                ? getDDMMYYYY(updatedTimestamp)
                : '- - -'}
            </Name>
          </div>
        </div>
      </div>
      <TransactionStatusCell splits={transactionDetails} nodal={nodal} />
    </TabletContainer>
  )

  private renderDesktop = (
    id: string,
    amount: number,
    customer: { name: string; phone: string },
    beneficiary: { name: string; phone: string },
    createdTimestamp: string,
    updatedTimestamp: string,
    transactionDetails: ISplitTransaction[],
    nodal: INodal,
  ) => (
    <DesktopContainer to={`/transactions/${id}`}>
      <AmountCell amount={amount} style={{ fontSize: '1.3rem' }} />
      <div>
        <Name>{customer.name}</Name>
        {!isPhoneOrTable() && <Space height={SpaceEnum.s} />}
        <PhoneCell phone={customer.phone} />
      </div>
      <div>
        <Name>{beneficiary.name}</Name>
        {!isPhoneOrTable() && <Space height={SpaceEnum.s} />}
        <PhoneCell phone={beneficiary.phone} />
      </div>
      {!isPhoneOrTable() && (
        <>
          <TimeCell time={createdTimestamp} space={SpaceEnum.s} />
          <TimeCell time={updatedTimestamp} space={SpaceEnum.s} />
        </>
      )}
      <TransactionStatusCell splits={transactionDetails} nodal={nodal} />
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
    background: ${primaryHover};
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
    background: ${primaryHover};
  }
`

export default TransactionItem
