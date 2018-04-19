import axios from 'axios'
import { LogsPath } from './constants-api'

export const LOG_FETCH_LIMIT = 40

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

export const fetchIVRLogsAPI = (offset: number, customerPhone?: string) =>
  axios
    .post(LogsPath.ivr, ivrLogsFormData(LOG_FETCH_LIMIT, offset, customerPhone))
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

const reviewerLogsFormData = (
  limit: number,
  offset: number,
  filter: string | reviewerActionEnum,
) => {
  const data = new FormData()
  data.append('limit', limit.toString())
  data.append('offset', offset.toString())
  if (typeof filter === 'string') {
    data.append('reviewer', filter)
  } else {
    if (filter !== reviewerActionEnum.all) {
      data.append('activity', filter.toString())
    }
  }
  return data
}

export const fetchReviewerLogsAPI = (
  offset: number,
  filter: string | reviewerActionEnum,
) =>
  axios.post(
    LogsPath.reviewer,
    reviewerLogsFormData(LOG_FETCH_LIMIT, offset, filter),
  )
