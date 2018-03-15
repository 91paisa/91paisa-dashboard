import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { IReduxState } from '../../store/initial-state'
import CustomerList from './CustomerList'

function mapStateToProps (state: IReduxState) {
  return {
    customers: state.customers,
  }
}

export default withRouter(connect(mapStateToProps)(CustomerList))
