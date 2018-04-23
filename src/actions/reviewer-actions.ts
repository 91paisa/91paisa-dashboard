import { getAllReviewersAPI } from '../api/reviewer-api'
import { reviewerActions } from './constants-actions'

export const getAllReviewers = () => {
  return (dispatch: any) => {
    getAllReviewersAPI().then(reviewers =>
      dispatch({
        reviewers,
        type: reviewerActions.getAll,
      }),
    )
  }
}
