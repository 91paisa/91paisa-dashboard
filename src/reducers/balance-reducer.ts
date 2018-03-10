import { IBalanceAction } from '../actions/balances-actions'
import { balanceActions } from '../actions/constants-actions'

export default function(state = {}, action: IBalanceAction) {
  if (action.type === balanceActions.eko) {
    return {
      nodal: action.nodal,
    }
  }
  if (action.type === balanceActions.nodal) {
    return {
      eko: action.eko,
    }
  }
  return state
}
