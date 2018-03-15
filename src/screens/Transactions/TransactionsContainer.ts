import { connect } from 'react-redux'
import { IReduxState } from '../../store/initial-state'
import TransactionsListContainer from './TranasctionsListContainer'


const mapStateToProps = (state: IReduxState) => {
  return {transactions: state.transactions}
}

export default connect(mapStateToProps)(TransactionsListContainer as any)
