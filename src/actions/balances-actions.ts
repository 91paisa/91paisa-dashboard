import { Dispatch } from 'redux'
import {
  getEkoBalanceApi,
  getNodalBalanceApi,
  IBalance,
} from '../api/balances-api'
import { balanceActions } from './constants-actions'

export interface IBalanceAction {
  nodal?: IBalance
  eko?: IBalance
  type: balanceActions
}

export const getNodalBalance = () => {
  return (dispatch: Dispatch<IBalanceAction>) => {
    const balance = getNodalBalanceApi()
    dispatch({
      nodal: {
        ...balance,
      },
      type: balanceActions.nodal,
    })
  }
}

export const getEkoBalance = () => {
  return (dispatch: Dispatch<IBalanceAction>) => {
    const balance = getEkoBalanceApi()
    dispatch({
      eko: {
        ...balance,
      },
      type: balanceActions.eko,
    })
  }
}
