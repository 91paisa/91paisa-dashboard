import { IBalanceAction } from '../actions/balances-actions'
import { balanceActions } from '../actions/constants-actions'

export default function(state = {}, action: IBalanceAction) {
  if (action.type === balanceActions.eko) {
    return {
      ...state,
      eko: action.eko,
    }
  }
  if (action.type === balanceActions.nodal) {
    return {
      ...state,
      nodal: action.nodal,
    }
  }
  return state
}
