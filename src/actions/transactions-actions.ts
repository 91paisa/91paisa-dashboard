import { getAllTransactionsAPI } from '../api/transaction-api'
import { transactionActions } from './constants-actions'

export const getAllTransactions = () => {
  return (dispatch: any) => {
    getAllTransactionsAPI().then(transactions =>
      dispatch({
        transactions,
        type: transactionActions.getAll,
      }),
    )
  }
}
