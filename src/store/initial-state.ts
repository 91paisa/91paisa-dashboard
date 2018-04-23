import { authStatus } from '../actions/auth-actions'
import { IBalance } from '../api/balances-api'
import { ICustomer } from '../api/customer-api'
import { IReviewer } from '../api/reviewer-api'
import { ITransaction } from '../api/transaction-api'

export interface IReduxState {
  auth: {
    token: string | null
    status: authStatus
  }
  balances: {
    eko: IBalance | null
    nodal: IBalance | null
  }
  customers: ICustomer[]
  reviewers: { [key: string]: IReviewer }
  transactions: ITransaction[]
  search: {
    customer: string
  }
}

const state: IReduxState = {
  auth: {
    get token() {
      return localStorage.getItem('token')
    },
    status: authStatus.success,
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
  reviewers: {},
  search: {
    customer: '',
  },
  transactions: [],
}
export default state
