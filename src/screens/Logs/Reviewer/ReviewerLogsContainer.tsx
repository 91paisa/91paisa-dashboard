import * as React from 'react'
import { reviewerActionEnum } from '../../../api/logs-api'
import { ActionContainer } from '../LogStyles'
import FilterReviewerLogs from './FilterReviewerLogs'
import ReviewerLogItem from './ReviewerLogItem'

class ReviewerLogsContainer extends React.Component {
  public state = {
    filter: reviewerActionEnum.all,
  }
  public render() {
    return (
      <>
        <ActionContainer>
          <FilterReviewerLogs
            filter={this.updateFilter}
            updateFilter={this.state.filter}
          />
        </ActionContainer>
        <ReviewerLogItem />
        <ReviewerLogItem />
        <ReviewerLogItem />
      </>
    )
  }
  private updateFilter = (filter: reviewerActionEnum) => {
    this.setState({ filter })
  }
}
export default ReviewerLogsContainer
