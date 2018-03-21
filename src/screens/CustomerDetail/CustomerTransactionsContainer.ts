import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { IReduxState } from '../../store/initial-state'
import TransactionsList from '../Transactions/TransactionsList'

function mapStateToProps(state: IReduxState, props: any) {
  const { customerPhone } = props.match.params
  return {
    hideCustomerColumn: true,
    transactions: state.transactions.filter(
      transaction => customerPhone === transaction.customer.phone,
    ),
  }
}

export default withRouter(connect(mapStateToProps)(TransactionsList as any))
