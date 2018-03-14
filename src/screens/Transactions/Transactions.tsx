import { Component, default as React } from 'react'
import { ITransaction } from '../../api/transaction-api'
import TransactionsListContainer from './TranasctionsListContainer'
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
       <TransactionsListContainer/>
      </div>
    )
  }
}

export default Transactions
