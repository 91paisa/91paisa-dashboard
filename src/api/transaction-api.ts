import axios from 'axios'
import { TransactionPath } from './constants-api'

export enum transactionType {
  send = 'SEND',
}

export enum transactionMode {
  neft = 'NEFT',
  imps = 'IMPS',
}

export enum splitTransactionStatus {
  didNotTry = 0,
  hold = 1,
  commit = 2,
  holdDeclined = 3,
  commitDeclined = 4,
  initiated = 5,
  processing = 6,
  success = 7,
  failure = 8,
  refundPending = 9,
  refundSuccess = 10,
  cancel = 11,
}

export enum transactionActionEnum {
  updating = -1,
  notAvailable = 0,
  available = 1,
  approve = 2,
  reject = 3,
}

export enum nodalStatusEnum {
  internalError = -2,
  noop = -1,
  notInitiated = 0,
  initiates = 1,
  authorized = 2,
  failed = 3,
  paymentArrived = 4,
  dispute = 5,
}

export interface ISplitTransaction {
  id: string
  amount: number
  status: splitTransactionStatus
  createdTimestamp: string
  updatedTimestamp: string
}

export interface INodal {
  id: string
  status: nodalStatusEnum
}

export interface ITransaction {
  actionStatus: transactionActionEnum
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
  createdTimestamp: string
  updatedTimestamp: string
  transactionDetails?: ISplitTransaction[]
  nodal: INodal
}

const getAllTransactionsFormData = (limit: number, offset: number) => {
  const data = new FormData()
  data.append('limit', `${limit}`)
  data.append('offset', `${offset}`)
  return data
}

const getNodalId = (_: any) => _.razorpay_payment_id.String

export const getAllTransactionsAPI = (
  limit: number = 1000,
  offset: number = 0,
): Promise<ITransaction> => {
  return axios
    .post(TransactionPath.all, getAllTransactionsFormData(limit, offset))
    .then(res => {
      return res.data.data.map((_: any): ITransaction => ({
        actionStatus: _.action_status,
        amount: _.amount,
        beneficiary: {
          name: _.beneficiary_name,
          phone: _.beneficiary_phone,
        },
        commission: _.commission,
        createdTimestamp: _.created_at,
        customer: {
          name: _.customer_name,
          phone: _.customer_phone,
        },
        id: _.transaction_id,
        mode: _.transaction_mode,
        nodal: {
          id: getNodalId(_),
          status: getNodalStatus(_, _.action_status),
        },
        transactionDetails: _.eko_transactions.map(($: any) => ({
          amount: $.amount,
          createdTimestamp: $.created_at,
          id: $.eko_tid.String,
          status: $.status_code,
          updatedTimestamp: $.updated_at,
        })),
        type: _.transaction_type,
        updatedTimestamp: _.updated_at,
      }))
    })
    .catch(() => [])
}

const getNodalStatus = (_: any, actionStatus: transactionActionEnum) => {
  if (_.razorpay_payment_status.Valid) {
    return _.razorpay_payment_status.Int64 as nodalStatusEnum
  }
  if (
    !_.razorpay_payment_status.Valid &&
    actionStatus === transactionActionEnum.approve
  ) {
    return nodalStatusEnum.internalError
  }
  return nodalStatusEnum.noop
}

const transactionActionFormData = (
  transactionId: string,
  action: transactionActionEnum,
): FormData => {
  const data = new FormData()
  data.append('transaction', transactionId)
  data.append('status', action.valueOf().toString())
  return data
}

export const transactionActionAPI = (
  transactionId: string,
  action: transactionActionEnum,
) =>
  axios
    .post(
      TransactionPath.updateAction,
      transactionActionFormData(transactionId, action),
    )
    .then(() => true)
    .catch(() => false)
