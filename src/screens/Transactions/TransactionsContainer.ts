import { connect } from 'react-redux'
import { IReduxState } from '../../store/initial-state'
import Transactions from './Transactions'
const mapStateToProps = (state: IReduxState) => {
  return { transactions: state.transactions }
}

export default connect(mapStateToProps)(Transactions)
