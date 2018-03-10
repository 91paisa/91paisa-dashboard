import { Dispatch } from 'redux'
import { getCustomers, ICustomer } from '../api/customer-api'
import { customersActions } from './constants-actions'
export const getAllCustomers = () => {
  return (dispatch: Dispatch<ICustomer[]>) => {
    getCustomers().then(customers =>
      dispatch({
        customers,
        type: customersActions.getAll,
      }),
    )
  }
}
