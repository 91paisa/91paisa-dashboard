import axios from 'axios'
import { TransactionPath } from './constants-api'
export enum transactionType {
  send = 'SEND',
}
export enum transactionMode {
  cash = 'CASH',
}
export enum splitTransactionStatus {
  didNotTry,
  hold,
  commit,
  holdDeclined,
  commitDeclined,
  initiated,
  processing,
  success,
  failure,
  refundPending,
  refundSuccess,
}
interface ISplitTransaction {
  id: string
  amount: number
  status: splitTransactionStatus
  createdTimestamp: string
  updatedTimestamp: string
}
export interface ITransaction {
  id: string
  type: transactionType
  mode: transactionMode
  amount: number
  commission: number
  customer: {
    name: string
    phone: string
  }
  beneficiary: {
    name: string
    phone: string
  }
  createTimestamp: string
  updatedTimestamp: string
  transactionDetails: ISplitTransaction[]
}

const getAllTransactionsFormData = (limit: number, offset: number) => {
  const data = new FormData()
  data.append('limit', `${limit}`)
  data.append('offset', `${offset}`)
  return data
}
export const getAllTransactionsAPI = (
  limit: number = 1000,
  offset: number = 0,
): Promise<ITransaction | undefined> => {
  return axios
    .post(TransactionPath.all, getAllTransactionsFormData(limit, offset))
    .then(res => {
      return res.data.data.map((_: any) => ({
        amount: _.amount,
        beneficiary: {
          name: _.beneficiary_name,
          phone: _.beneficiary_phone,
        },
        commission: _.commission,
        createTimestamp: _.created_at,
        customer: {
          name: _.customer_name,
          phone: _.customer_phone,
        },
        id: _.transaction_id,
        mode: _.transaction_mode,
        transactionDetails: _.eko_transactions.map(($: any) => ({
          amount: $.amount,
          createdTimestamp: $.created_at,
          id: $.eko_transaction_id,
          status: splitTransactionStatus[$.status],
          updatedTimestamp: $.updated_at,
        })),
        type: _.transaction_type,
        updatedTimestamp: _.updated_at,
      }))
    })
    .catch(() => undefined)
}
