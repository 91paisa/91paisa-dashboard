import { searchActions } from '../actions/constants-actions'

export default function(state: any = {}, action: any) {
  if (action.type === searchActions.customer) {
    return {
      customer: action.searchText,
    }
  }
  return state
}
