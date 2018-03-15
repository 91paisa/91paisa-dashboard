import { connect } from 'react-redux'
import { IReduxState } from '../../store/initial-state'
import CustomerDetail from './CustomerDetail'

const mapStateToProps = (state: IReduxState, props: any) => {
  const {customerPhone} = props.match.params
  const index = state.customers.findIndex(
    customer => customer.phone === customerPhone,
  )
  const customerData = index < 0 ? undefined : state.customers[index]
  return {
    customer: customerData,
    customerIndex: index,
  }
}
export default connect(mapStateToProps)(CustomerDetail)
