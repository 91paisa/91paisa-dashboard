import { transactionActions } from '../actions/constants-actions'

export default function(state = {}, action: any) {
  if (action.type === transactionActions.getAll) {
    return action.transactions
  }
  return state
}
