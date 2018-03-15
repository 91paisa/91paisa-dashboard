import { Dispatch } from 'redux'
import {
  getBeneficiariesAPI,
  getCustomers,
  IBeneficiary,
  ICustomer,
} from '../api/customer-api'
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

export const getBeneficiaryAction = (customerPhone: string) => {
  return (dispatch: Dispatch<IBeneficiary[]>) => {
    getBeneficiariesAPI(customerPhone).then(beneficiaries =>
      dispatch({
        beneficiaries,
        customerPhone,
        type: customersActions.getBeneficiaries,
      }),
    )
  }
}
