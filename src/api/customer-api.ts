import axios from 'axios'
import { CustomerPath } from './constants-api'

export enum customerStatus {
  unverified,
  mandateNotInitialted,
  mandateInitiated,
  mandateApproved,
  mandateRejected,
}

export enum beneficiaryStatus {
  verified,
  unverified,
}

export interface ILastTransaction {
  amount: number
  createdTimestamp: string
}

export interface ICustomerStatus {
  code: customerStatus
  detail: string | undefined
}

export interface ICustomer {
  name: string
  phone: string
  status: ICustomerStatus
  lastTransaction: ILastTransaction | undefined
  beneficiaries: IBeneficiary[] | undefined
}

export interface IBeneficiary {
  id: string
  name: string
  phone: string
  account: number
  ifsc: string
  status: beneficiaryStatus
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
    const status = {
      code: getMandateStatusEnum(customer.mandate_status, customer.verified),
      detail: customer.mandate_fail_reason
        ? customer.mandate_fail_reason
        : undefined,
    }
    return {
      lastTransaction,
      name: customer.name,
      phone: customer.phone_number,
      status,
    }
  })
}

function getMandateStatusEnum(mandateStatus: number, verified: boolean) {
  let status

  if (mandateStatus === 1) {
    status = customerStatus.mandateInitiated
  } else if (mandateStatus === 2) {
    status = customerStatus.mandateApproved
  } else if (mandateStatus === 3) {
    status = customerStatus.mandateRejected
  } else if (!verified) {
    status = customerStatus.unverified
  } else {
    status = customerStatus.mandateNotInitialted
  }
  return status
}

export const getCustomers = (): Promise<ICustomer[]> =>
  axios
    .post(CustomerPath.all, getCustomersFormData(0, 1000)) // TODO fix implement limits and offset
    .then(res => formatCustomersList(res))
    .catch(() => [])

const getCustomerFormData = (customerPhone: string) => {
  const data = new FormData()
  data.append('phone', customerPhone)
  return data
}
export const getBeneficiariesAPI = (
  customerPhone: string,
): Promise<IBeneficiary[]> =>
  axios
    .post(CustomerPath.detail, getCustomerFormData(customerPhone))
    .then(response => {
      return response.data.data.beneficiaries.map((b: any) => ({
        account: b.account_number,
        id: b.beneficiary_id,
        ifsc: b.ifsc,
        name: b.name,
        phone: b.phone_number,
        status: b.verified
          ? beneficiaryStatus.verified
          : beneficiaryStatus.unverified,
      }))
    })
    .catch(err => err)
