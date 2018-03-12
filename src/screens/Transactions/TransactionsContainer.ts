import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllTransactions } from '../../actions/transactions-actions'
import { IReduxState } from '../../store/initial-state'
import Transactions from './Transactions'
const mapStateToProps = (state: IReduxState) => {
  return { transactions: state.transactions }
}

const mapDispatchToProps = (dispatch: any) => {
  bindActionCreators({ getAll: getAllTransactions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)
