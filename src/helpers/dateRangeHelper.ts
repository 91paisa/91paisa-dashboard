import moment from 'moment'

export enum rangeEnum {
  days,
  weeks,
  months,
}
export const getMinMaxDateRange = (
  range: rangeEnum,
): string[][] | undefined => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  if (range === rangeEnum.days) {
    return getDailyRange(numbers)
  } else if (range === rangeEnum.weeks) {
    return getWeeklyRange(numbers)
  } else if (range === rangeEnum.months) {
    return getMonthlyRange(numbers)
  }
  return undefined
}

const getDailyRange = (numbers: number[]) =>
  numbers.map((n: number) => {
    const date = moment()
      .subtract(n, 'days')
      .format('YYYY-MM-DD')
    return [date, date]
  })

const getWeeklyRange = (numbers: number[]) =>
  numbers.map((n: number) => {
    const startDate = moment()
      .subtract(n as any, 'week')
      .format('YYYY-MM-DD')
    const endDate = moment()
      .subtract(n + 1, 'week')
      .add(1, 'days')
      .format('YYYY-MM-DD')
    return [startDate, endDate]
  })

const getMonthlyRange = (numbers: number[]) =>
  numbers.map((n: number) => {
    const startDate = moment()
      .subtract(n as any, 'months')
      .format('YYYY-MM-DD')
    const endDate = moment()
      .subtract(n + 1, 'months')
      .format('YYYY-MM-DD')
    return [startDate, endDate]
  })
