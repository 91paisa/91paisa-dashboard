import moment from 'moment'

export const getDDMMYYYY = (time: string) => moment(time).format('DD/MM/YY')
export const getLT = (time: string) => moment(time).format('LT')

export const getCallDuration = (start: string, end: string) => {
  const startDate = moment(start)
  const endDate = moment(end)
  return Math.floor(moment.duration(endDate.diff(startDate)).asSeconds()) + 's'
}
