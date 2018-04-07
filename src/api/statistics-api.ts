import { getMinMaxDateRange, rangeEnum } from '../helpers/dateRangeHelper'

export const customerStats = (range: rangeEnum) => {
  const minMaxDate = getMinMaxDateRange(range)
  // tslint:disable-next-line
  console.log(minMaxDate)
}
