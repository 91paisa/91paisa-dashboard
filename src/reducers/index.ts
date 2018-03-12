import { combineReducers } from 'redux'
import auth from './auth-reducer'
import balances from './balance-reducer'
import customers from './customer-reducer'
import transactions from './transaction-reducer'

export default combineReducers({
  auth,
  balances,
  customers,
  transactions,
})
