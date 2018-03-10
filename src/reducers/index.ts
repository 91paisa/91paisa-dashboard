import { combineReducers } from 'redux'
import auth from './auth-reducer'
import customers from './customer-reducer'
export default combineReducers({
  auth,
  customers,
})
