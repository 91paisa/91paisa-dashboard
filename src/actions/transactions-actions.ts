import {
  getAllTransactionsAPI,
  ITransaction,
  transactionActionAPI,
  transactionActionEnum,
} from '../api/transaction-api'
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

export const updateTransaction = (
  action: transactionActionEnum,
  transaction: ITransaction,
) => {
  return (dispatch: any) => {
    transactionActionAPI(transaction.id, action).then(isSuccess => {
      if (isSuccess) {
        dispatch({
          transaction: { ...transaction, actionStatus: action.valueOf() },
          type: transactionActions.update,
        })
      }
    })
  }
}

// TODO replace with [redux-batch-actions](https://github.com/tshelburne/redux-batched-actions)
export const updating = (transaction: ITransaction) => ({
  transaction: {
    ...transaction,
    actionStatus: transactionActionEnum.updating,
  },
  type: transactionActions.update,
})
