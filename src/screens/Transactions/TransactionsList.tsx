import { Component, default as React } from 'react'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'
import { ITransaction } from '../../api/transaction-api'
import CustomerTransactionList from '../CustomerDetail/transaction/CustomerTransactionList'

interface IProps extends RouteComponentProps<IProps> {
  hideCustomerColumn?: boolean
  transactions: ITransaction[]
}

class TransactionsList extends Component<IProps, {}> {
  public render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <CustomerTransactionList
            transactions={this.props.transactions}
            ludicrousMode={true}
          />
        </InnerContainer>
      </OuterContainer>
    )
  }
}

const InnerContainer = styled.div`
  max-width: 88rem;
  margin: 0 auto;
`

const OuterContainer = styled.div`
  padding-top: 1rem;
  width: 100%;
  height: 100%;
  overflow: auto;
`
export default TransactionsList
