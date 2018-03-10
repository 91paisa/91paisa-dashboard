import { connect } from 'react-redux'
import { IReduxState } from '../../store/initial-state'
import Customers from './Customers'
function mapStateToProps(state: IReduxState) {
  return {
    customers: state.customers,
  }
}
export default connect(mapStateToProps)(Customers)
