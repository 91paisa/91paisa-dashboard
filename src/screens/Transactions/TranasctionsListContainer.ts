import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { IReduxState } from '../../store/initial-state'
import TransactionsList from './TransactionsList'

function mapStateToProps (state: IReduxState) {
  return {
    transactions: state.transactions,
  }
}

export default withRouter(connect(mapStateToProps)(TransactionsList))
