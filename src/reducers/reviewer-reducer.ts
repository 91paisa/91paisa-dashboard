import { reviewerActions } from '../actions/constants-actions'

export default function(state: any = {}, action: any) {
  if (action.type === reviewerActions.getAll) {
    return action.reviewers
  }
  return state
}
