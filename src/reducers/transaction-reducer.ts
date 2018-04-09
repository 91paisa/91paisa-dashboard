import { transactionActions } from '../actions/constants-actions'
import { ITransaction } from '../api/transaction-api'

export default function(state = {}, action: any) {
  if (action.type === transactionActions.getAll) {
    return action.transactions
  }
  if (action.type === transactionActions.update) {
    return (state as any).map((transaction: ITransaction) => {
      if (transaction.id === action.transaction.id) {
        return action.transaction
      }
      return transaction
    })
  }
  return state
}
