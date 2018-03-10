import axios from 'axios'
import { CustomerPath } from './constants-api'
export interface ICustomer {
  name: string
  phone: string
  mandateApproved: boolean
  verified: boolean
}
const getCustomersFormData = (offset: number, limit: number): FormData => {
  const data = new FormData()
  data.append('limit', `${limit}`)
  data.append('offset', `${offset}`)
  return data
}
function formatCustomersList(res: any): ICustomer[] {
  return res.data.data.map((customer: any) => ({
    mandateApproved: customer.mandate_approved,
    name: customer.name,
    phone: customer.phone_number,
    verified: customer.verified,
  }))
}
export const getCustomers = (): Promise<ICustomer[]> =>
  axios
    .post(CustomerPath.all, getCustomersFormData(0, 1000)) // TODO fix implement limits and offset
    .then(res => formatCustomersList(res))
    .catch(() => [])
