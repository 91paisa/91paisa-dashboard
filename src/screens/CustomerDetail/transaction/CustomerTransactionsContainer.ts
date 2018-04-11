import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { IReduxState } from '../../../store/initial-state'
import CustomerTransactionList from './CustomerTransactionList'

function mapStateToProps(state: IReduxState, props: any) {
  const { customerPhone } = props.match.params
  return {
    transactions: state.transactions.filter(
      transaction => customerPhone === transaction.customer.phone,
    ),
  }
}

export default withRouter(
  connect(mapStateToProps)(CustomerTransactionList as any),
)
