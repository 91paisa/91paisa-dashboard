import axios from 'axios'
import { LogsPath } from './constants-api'
const FETCH_LIMIT = 30
export interface IIVRLogs {
  amount?: number
  beneficiaryPhone?: string
  customerPhone: string
  id: string
  createdTimestamp: string
  updatedTimestamp: string
  transactionId?: string
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
    .post(LogsPath.ivr, ivrLogsFormData(FETCH_LIMIT, offset, customerPhone))
    .then((r): IIVRLogs[] => {
      const data = r.data.data
      return data.map((log: any): IIVRLogs => ({
        amount: log.amount.Int64,
        beneficiaryPhone: log.beneficiary_phone.String,
        createdTimestamp: log.created_at,
        customerPhone: log.caller,
        id: log.call_sid,
        transactionId: log.transaction_id.String,
        updatedTimestamp: log.updated_at,
      }))
    })
