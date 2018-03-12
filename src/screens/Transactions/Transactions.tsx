import { Component, default as React } from 'react'
import { ITransaction } from '../../api/transaction-api'
interface IProps {
  transactions: ITransaction[]
}
class Transactions extends Component<IProps> {
  public state = {
    hi: 'bye',
  }
  public render() {
    return (
      <div style={{ overflow: 'scroll', height: '100vh' }}>
        <pre>
          <code>{JSON.stringify(this.props.transactions, null, 4)}</code>
        </pre>
      </div>
    )
  }
}

export default Transactions
