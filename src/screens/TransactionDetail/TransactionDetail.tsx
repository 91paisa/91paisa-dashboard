import { Component, default as React } from 'react'
import { ITransaction } from '../../api/transaction-api'

interface IProps {
  transaction: ITransaction
  transactionIndex: number
}
class TransactionDetail extends Component<IProps> {
  public render() {
    return (
      <div>
        <pre>
          <code>{JSON.stringify(this.props.transaction, null, 4)}</code>
        </pre>
      </div>
    )
  }
}

export default TransactionDetail
