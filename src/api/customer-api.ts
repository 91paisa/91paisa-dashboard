import axios from 'axios'
import { CustomerPath } from './constants-api'
export enum customerStatus {
  unverified,
  mandatePending,
  mandateApproved,
  mandateRejected,
}

export interface ILastTransaction {
  amount: number
  createdTimestamp: string
}

export interface ICustomer {
  name: string
  phone: string
  status: customerStatus
  lastTransaction: ILastTransaction | undefined
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
      const createdTimestamp = customer.latest_transaction.created_at
      lastTransaction = {
        amount,
        createdTimestamp,
      }
    }
    let status
    if (customer.mandate_approved) {
      status = customerStatus.mandateApproved
    } else if (!customer.verified) {
      status = customerStatus.unverified
    } else {
      status = customerStatus.mandatePending
    }
    return {
      lastTransaction,
      name: customer.name,
      phone: customer.phone_number,
      status,
      verified: customer.verified,
    }
  })
}
export const getCustomers = (): Promise<ICustomer[]> =>
  axios
    .post(CustomerPath.all, getCustomersFormData(0, 1000)) // TODO fix implement limits and offset
    .then(res => formatCustomersList(res))
    .catch(() => [])
