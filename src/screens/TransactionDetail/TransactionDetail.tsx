import { Component, default as React, Fragment } from 'react'
import { ITransaction } from '../../api/transaction-api'
import SplitList from './SplitList'
import TransactionSummary from './TransactionSummary'

interface IProps {
  transaction: ITransaction | undefined
  transactionIndex: number
}

class TransactionDetail extends Component<IProps> {
  public render() {
    if (!this.props.transaction) {
      return <div />
    }
    return (
      <Fragment>
        <TransactionSummary transaction={this.props.transaction} />
        <SplitList splits={this.props.transaction.transactionDetails} />
      </Fragment>
    )
  }
}

export default TransactionDetail
