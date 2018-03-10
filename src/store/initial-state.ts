import { IBalance } from '../api/balances-api'
import { ICustomer } from '../api/customer-api'

export interface IReduxState {
  auth: {
    token: string | null
  }
  balances: {
    eko: IBalance | null
    nodal: IBalance | null
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
    eko: {
      amount: 125212,
      timestamp: '7:00PM 12/3/17',
    },
    nodal: {
      amount: 132012.43,
      timestamp: '7:01PM 12/3/17',
    },
  },
  customers: [],
}
export default state
