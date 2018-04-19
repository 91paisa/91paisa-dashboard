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
  createdTimestamp: string
  updatedTimestamp: string
  reviewer: {
    id: string
  }
  customer?: {
    id: string
    name?: string
  }
  beneficiary?: {
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
  if (typeof filter === 'string') {
    data.append('reviewer', filter)
  } else {
    if (filter && filter !== reviewerActionEnum.all) {
      data.append('activity', filter.toString())
    }
  }
  return data
}

const formatReviewerLogResponse = (data: any): IReviewLog[] => {
  const log1: IReviewLog = {
    action: reviewerActionEnum.login,
    createdTimestamp: '12',
    reviewer: {
      id: 'abc',
    },
    updatedTimestamp: '13',
  }
  const log2: IReviewLog = {
    action: reviewerActionEnum.login,
    createdTimestamp: '12',
    reviewer: {
      id: 'abc',
    },
    updatedTimestamp: '13',
  }
  return [log1, log2]
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
    .catch(err => formatReviewerLogResponse('aa'))
