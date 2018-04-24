import axios from 'axios'
import { getMinMaxDateRange, rangeEnum } from '../helpers/date-range-helper'
import { StatisticsPath } from './constants-api'

export interface ICustomerStatistics {
  mandateApproved: number
  mandateInitiated: number
  mandateNotRequested: number
  mandateRejected: number
  total: number
  unverified: number
  verified: number
}

export const getStatsForTodayAPI = (): Promise<
  ICustomerStatistics | undefined
> => {
  const minMaxDate = getMinMaxDateRange(rangeEnum.today) as string[][]
  return customerStatsAPI(minMaxDate).then(r => r)
}

const customerStatisticsFormData = (range: string[]) => {
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
  unverified: d.unverified,
  verified: d.verified,
})

export const customerStatsAPI = (minMaxDate: string[][]) =>
  axios
    .post(StatisticsPath.customer, customerStatisticsFormData(minMaxDate[0]))
    .then(r => formatCustomerStatisticsResponse(r.data.data))
    .catch(() => undefined)
