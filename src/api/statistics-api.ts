import axios from 'axios'
import { getMinMaxDateRange, rangeEnum } from '../helpers/date-range-helper'
import { StatisticsPath } from './constants-api'

const enum responseType {
  beneficiary = 'beneficiary',
  customer = 'customer',
  splitTransaction = 'splitTransaction',
  transaction = 'transaction',
}

interface IRootStatistics {
  type: responseType
}

export interface ICustomerStatistics extends IRootStatistics {
  mandateApproved: number
  mandateInitiated: number
  mandateNotRequested: number
  mandateRejected: number
  total: number
  unverified: number
  verified: number
}

export interface IBeneficiaryStatistics extends IRootStatistics {
  total: number
  verified: number
}

export interface ITransactionStatisticsItem {
  amount: number
  count: number
}

export interface ISplitTransactionStatistics extends IRootStatistics {
  total: ITransactionStatisticsItem
  initiated: ITransactionStatisticsItem
  processing: ITransactionStatisticsItem
  successful: ITransactionStatisticsItem
  failed: ITransactionStatisticsItem
  cancelled: ITransactionStatisticsItem
}

export interface ITransactionStatistics extends IRootStatistics {
  total: number
  initiated: number
  successful: number
  failed: number
  cancelled: number
}

export interface IStats {
  beneficiary: IBeneficiaryStatistics | undefined
  customer: ICustomerStatistics | undefined
  splitTransaction: ISplitTransactionStatistics | undefined
  transaction: ITransactionStatistics | undefined
}

export const getStatsForTodayAPI = (): Promise<IStats> => {
  const minMaxDate = getMinMaxDateRange(rangeEnum.today) as string[][]
  const statisticsAPIs = [
    customerStatisticsAPI(minMaxDate),
    beneficiaryStatisticsAPI(minMaxDate),
    splitTransactionStatisticsAPI(minMaxDate),
    transactionStatisticsAPI(minMaxDate),
  ]
  return axios.all(statisticsAPIs).then((responses: any) => {
    return responses
      .map((response: any) => {
        switch (response.request.responseURL) {
          case StatisticsPath.customer:
            return formatCustomerStatisticsResponse(response.data.data)
          case StatisticsPath.beneficiary:
            return formatBeneficiaryStatisticsResponse(response.data.data)
          case StatisticsPath.splitTransaction:
            return formatSplitTransactionStatisticsResponse(response.data.data)
          case StatisticsPath.transaction:
            return formatTransactionStatisticsResponse(response.data.data)
          default:
            return undefined
        }
      })
      .reduce((result: any, item: IRootStatistics) => {
        // tslint:disable-next-line
        console.log('abcdefghi', item)
        result[item.type] = item
        return result
      }, {})
  })
}

const getFormData = (range: string[]) => {
  const data = new FormData()
  data.append('start', range[0])
  data.append('end', range[1])
  return data
}

const formatCustomerStatisticsResponse = (d: any): ICustomerStatistics => ({
  mandateApproved: d.mandate_approved,
  mandateInitiated: d.mandate_initiated,
  mandateNotRequested: d.mandate_not_requested,
  mandateRejected: d.mandate_rejected,
  total: d.total,
  type: responseType.customer,
  unverified: d.unverified,
  verified: d.verified,
})

export const customerStatisticsAPI = (minMaxDate: string[][]) =>
  axios.post(StatisticsPath.customer, getFormData(minMaxDate[0]))

const formatBeneficiaryStatisticsResponse = (
  d: any,
): IBeneficiaryStatistics => ({
  total: d.total,
  type: responseType.beneficiary,
  verified: d.verified,
})

export const beneficiaryStatisticsAPI = (minMaxDate: string[][]) =>
  axios.post(StatisticsPath.beneficiary, getFormData(minMaxDate[0]))

const formatSplitTransactionStatisticsResponse = (
  d: any,
): ISplitTransactionStatistics => ({
  cancelled: { amount: d.cancelled.amount, count: d.cancelled.count },
  failed: { amount: d.failed.amount, count: d.failed.count },
  initiated: { amount: d.initiated.amount, count: d.initiated.count },
  processing: { amount: d.processing.amount, count: d.processing.count },
  successful: { amount: d.successful.amount, count: d.successful.count },
  total: { amount: d.total.amount, count: d.total.count },
  type: responseType.splitTransaction,
})

export const splitTransactionStatisticsAPI = (minMaxDate: string[][]) =>
  axios.post(StatisticsPath.splitTransaction, getFormData(minMaxDate[0]))

const formatTransactionStatisticsResponse = (
  d: any,
): ITransactionStatistics => ({
  cancelled: d.cancelled,
  failed: d.failed,
  initiated: d.initiated,
  successful: d.successful,
  total: d.total,
  type: responseType.transaction,
})

export const transactionStatisticsAPI = (minMaxDate: string[][]) =>
  axios.post(StatisticsPath.transaction, getFormData(minMaxDate[0]))
