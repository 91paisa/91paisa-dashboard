import axios from 'axios'
import { LogsPath } from './constants-api'

export const LOG_FETCH_LIMIT = 40
export type searchFilterType = string | reviewerActionEnum

export interface IVRTransaction {
  amount?: number
  id?: string
}

export interface IIVRLog {
  beneficiaryPhone?: string
  customer: {
    name?: string
    phone: string
  }
  id: string
  createdTimestamp: string
  updatedTimestamp: string
  transaction: IVRTransaction
}

const ivrLogsFormData = (
  limit: number,
  offset: number,
  customerPhone?: string,
) => {
  const data = new FormData()
  data.append('limit', limit.toString())
  data.append('offset', offset.toString())
  if (customerPhone) {
    data.append('phone', customerPhone)
  }
  return data
}

export const fetchIVRLogsAPI = (
  offset: number,
  customerPhone?: searchFilterType,
) =>
  axios
    .post(
      LogsPath.ivr,
      ivrLogsFormData(LOG_FETCH_LIMIT, offset, customerPhone as string),
    )
    .then((r): IIVRLog[] => {
      const data = r.data.data
      return data.map((log: any): IIVRLog => ({
        beneficiaryPhone: log.beneficiary_phone.String,
        createdTimestamp: log.created_at,
        customer: {
          name: log.customer_name.String,
          phone: log.caller,
        },
        id: log.call_sid,
        transaction: {
          amount: log.amount.Int64,
          id: log.transaction_id.String,
        },
        updatedTimestamp: log.updated_at,
      }))
    })

export enum reviewerActionEnum {
  all = -1,
  login = 0,
  unauth = 2,
  c_create = 3,
  c_verify = 4,
  c_otp = 5,
  c_update = 6,
  c_nodalId = 7,
  c_mandate = 8,
  b_create = 9,
  b_verify = 10,
  b_otp = 11,
  tx_approved = 12,
  tx_rejected = 13,
}

export interface IReviewLog {
  action: reviewerActionEnum
  beneficiary?: {
    id: string
    name: string
  }
  customer?: {
    id: string
    name?: string
  }
  createdTimestamp: string
  reviewer: {
    id: string
    name: string
  }
  transaction?: {
    id: string
    amount: number
  }
}

const reviewerLogsFormData = (
  limit: number,
  offset: number,
  filter?: searchFilterType,
) => {
  const data = new FormData()
  data.append('limit', limit.toString())
  data.append('offset', offset.toString())
  if (filter) {
    const actionFilter = parseInt(filter.toString(), 10)
    const isActionFilter = !isNaN(actionFilter)
    if (isActionFilter) {
      if (actionFilter !== reviewerActionEnum.all) {
        data.append('activity', actionFilter.toString())
      }
    } else {
      if (typeof filter === 'string') {
        data.append('reviewer', filter)
      }
    }
  }
  return data
}

const getCustomerInfo = (d: any) => {
  if (d.activity > reviewerActionEnum.login) {
    return {
      id: d.customer.phone_number,
      name: d.customer.name,
    }
  }
  return undefined
}

const getBeneficiaryInfo = (d: any) => {
  if (d.activity >= reviewerActionEnum.b_create) {
    return {
      id: d.beneficiary.phone_number,
      name: d.beneficiary.name,
    }
  }
  return undefined
}

const getTransactionInfo = (d: any) => {
  if (
    d.activity === reviewerActionEnum.tx_approved ||
    d.activity === reviewerActionEnum.tx_rejected
  ) {
    return {
      amount: d.transaction.amount,
      id: d.transaction.transaction_id,
    }
  }
  return undefined
}

const formatReviewerLogResponse = (data: any): IReviewLog[] => {
  return data.map((d: any) => {
    const customer = getCustomerInfo(d)
    const beneficiary = getBeneficiaryInfo(d)
    const transaction = getTransactionInfo(d)
    return {
      action: d.activity,
      beneficiary,
      createdTimestamp: d.created_at,
      customer,
      reviewer: {
        id: d.reviewer.reviewer_id,
        name: d.reviewer.name,
      },
      transaction,
    }
  })
}

export const fetchReviewerLogsAPI = (
  offset: number,
  filter?: string | reviewerActionEnum,
): Promise<IReviewLog[]> =>
  axios
    .post(
      LogsPath.reviewer,
      reviewerLogsFormData(LOG_FETCH_LIMIT, offset, filter),
    )
    .then(r => formatReviewerLogResponse(r.data.data))
    .catch(err => [])
