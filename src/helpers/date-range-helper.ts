import moment from 'moment'

export enum rangeEnum {
  today,
  week,
  month,
}
export const getMinMaxDateRange = (
  range: rangeEnum,
): string[][] | undefined => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  if (range === rangeEnum.week) {
    return getDailyRange(numbers)
  } else if (range === rangeEnum.month) {
    return getWeeklyRange(numbers)
  } else if (range === rangeEnum.today) {
    return [[getDateToday(), getDateToday()]]
  }
  return undefined
}

export const getDateToday = () => moment().format('YYYY-MM-DD')

const getDailyRange = (numbers: number[]) =>
  numbers.map((n: number) => {
    const date = moment()
      .subtract(n, 'week')
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
      .add(1, 'week')
      .format('YYYY-MM-DD')
    return [startDate, endDate]
  })

// const getMonthlyRange = (numbers: number[]) =>
//   numbers.map((n: number) => {
//     const startDate = moment()
//       .subtract(n as any, 'months')
//       .format('YYYY-MM-DD')
//     const endDate = moment()
//       .subtract(n + 1, 'months')
//       .format('YYYY-MM-DD')
//     return [startDate, endDate]
//   })
