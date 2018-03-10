import { customersActions } from '../actions/actionConstants'

export default function(state = {}, action: any) {
  if (action.type === customersActions.getAll) {
    return action.customers
  }
  return state
}
