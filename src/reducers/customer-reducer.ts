import { customersActions } from '../actions/constants-actions'
import { ICustomer } from '../api/customer-api'

export default function(state: any = {}, action: any) {
  if (action.type === customersActions.getAll) {
    return action.customers
  }
  if (action.type === customersActions.getBeneficiaries) {
    return state.map((customer: ICustomer) => {
      if (customer.phone === action.customerPhone) {
        customer.beneficiaries = action.beneficiaries
      }
      return customer
    })
  }
  return state
}
