import { reviewerActions } from '../actions/constants-actions'

export default function(state: any = {}, action: any) {
  // tslint:disable-next-line
  console.log(action)
  if (action.type === reviewerActions.getAll) {
    return action.reviewers
  }
  return state
}
