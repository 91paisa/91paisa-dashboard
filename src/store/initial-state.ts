import { ICustomer } from '../api/customer-api'

export interface IReduxState {
  auth: {
    token: string | null
  }
  balances: {
    eko: number | undefined
    nodal: number | undefined
  }
  customers: ICustomer[]
}
const state: IReduxState = {
  auth: {
    get token() {
      return localStorage.getItem('token')
    },
  },
  balances: {
    eko: 201921,
    nodal: 45310,
  },
  customers: [],
}
export default state
