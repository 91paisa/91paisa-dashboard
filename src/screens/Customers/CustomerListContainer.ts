import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { IReduxState } from '../../store/initial-state'
import CustomerList from './CustomerList'

function mapStateToProps(state: IReduxState) {
  const searchText = state.search.customer.toLowerCase()
  if (searchText) {
    const searchedCustomers = state.customers.filter((customer) => {
      return (
        customer.phone.includes(searchText) ||
        customer.name.toLowerCase().includes(searchText)
      )
    })
    return {
      customers: searchedCustomers,
    }
  }
  return {
    customers: state.customers,
  }
}

export default withRouter(connect(mapStateToProps)(CustomerList))
