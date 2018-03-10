import { Dispatch } from 'redux'
import { getCustomers, ICustomer } from '../api/customersAPI'
import { customersActions } from './actionConstants'
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
