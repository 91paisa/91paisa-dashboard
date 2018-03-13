import { connect } from 'react-redux'
import { IReduxState } from '../../store/initial-state'
import CustomerDetail from './CustomerDetail'

const mapStateToProps = (state: IReduxState, props: any) => {
  const { customerPhone } = props.match.params
  const index = state.customers.findIndex(
    customer => customer.phone === customerPhone,
  )
  return {
    customer: state.customers[index],
  }
}
export default connect(mapStateToProps)(CustomerDetail)
