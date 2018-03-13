import axios from 'axios'
import moment from 'moment'
import { CustomerPath } from './constants-api'
export enum customerStatus {
  unverified,
  mandatePending,
  mandateApproved,
  mandateRejected,
}
export interface ICustomer {
  name: string
  phone: string
  status: customerStatus
  lastTransaction: string | undefined
}

const getCustomersFormData = (offset: number, limit: number): FormData => {
  const data = new FormData()
  data.append('limit', `${limit}`)
  data.append('offset', `${offset}`)
  return data
}
function formatCustomersList(res: any): ICustomer[] {
  return res.data.data.map((customer: any) => {
    let lastTransaction
    if (customer.latest_transaction.amount !== 0) {
      const amount = customer.latest_transaction.amount
      const createTimestamp = customer.latest_transaction.created_at
      // const status = splitTransactionStatus.processing
      lastTransaction = `${amount.toLocaleString('en-IN', {
        currency: 'INR',
        style: 'currency',
      })} * ${moment(createTimestamp).format('lll')}`
    }
    return {
      lastTransaction,
      mandateApproved: customer.mandate_approved,
      name: customer.name,
      phone: customer.phone_number,
      verified: customer.verified,
    }
  })
}
export const getCustomers = (): Promise<ICustomer[]> =>
  axios
    .post(CustomerPath.all, getCustomersFormData(0, 1000)) // TODO fix implement limits and offset
    .then(res => formatCustomersList(res))
    .catch(() => [])
