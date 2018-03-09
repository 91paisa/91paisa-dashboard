import { Dispatch } from 'redux'
import { getCustomers } from '../api/customersAPI'
import { customersActions } from './actionConstants'
export const getAllCustomers = () => {
  return (dispatch: Dispatch<any>) => {
    getCustomers(0).then(customers =>
      dispatch({
        customers,
        type: customersActions.getAll,
      }),
    )
  }
}
