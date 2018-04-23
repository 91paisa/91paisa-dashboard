import { combineReducers } from 'redux'
import auth from './auth-reducer'
import balances from './balance-reducer'
import customers from './customer-reducer'
import reviewers from './reviewer-reducer'
import search from './search-reducer'
import transactions from './transaction-reducer'

export default combineReducers({
  auth,
  balances,
  customers,
  reviewers,
  search,
  transactions,
})
