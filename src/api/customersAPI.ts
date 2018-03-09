import axios from 'axios'
import { CustomerPath } from './apiConstants'

const getCustomersFormData = (offset: number, limit: number): FormData => {
  const data = new FormData()
  data.append('limit', `${limit}`)
  data.append('offset', `${offset}`)
  return data
}
export const getCustomers = (offset: number) =>
  axios
    .post(CustomerPath.all, getCustomersFormData(offset, 60))
    .then(res => res.data.data)
    .catch(() => undefined)
