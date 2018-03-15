import { connect } from 'react-redux'
import { IReduxState } from '../../store/initial-state'
import TransactionDetail from './TransactionDetail'

const mapStateToProps = (state: IReduxState, props: any) => {
  const { transactionId } = props.match.params
  const index = state.transactions.findIndex(
    transaction => transaction.id === transactionId,
  )
  const transactionData = index < 0 ? undefined : state.transactions[index]
  return {
    transaction: transactionData,
    transactionIndex: index,
  }
}
export default connect(mapStateToProps)(TransactionDetail)
