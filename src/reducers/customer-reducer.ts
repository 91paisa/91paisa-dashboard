import { customersActions } from '../actions/constants-actions'

export default function(state = {}, action: any) {
  if (action.type === customersActions.getAll) {
    return action.customers
  }
  return state
}
