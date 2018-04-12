import moment from 'moment'

export const getDDMMYYYY = (time: string) => moment(time).format('DD/MM/YY')
export const getLT = (time: string) => moment(time).format('LT')
