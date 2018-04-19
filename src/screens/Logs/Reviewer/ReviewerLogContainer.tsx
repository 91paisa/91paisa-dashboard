import * as React from 'react'
import { fetchReviewerLogsAPI, reviewerActionEnum } from '../../../api/logs-api'
import { remToPx } from '../../../helpers/unit-helper'
import { ActionContainer } from '../LogStyles'
import ReviewerLogFilter from './ReviewerLogFilter'
import ReviewerLogItem from './ReviewerLogItem'
import ReviewerLogList from './ReviewerLogList'
class ReviewerLogContainer extends React.Component {
  public state = {
    filter: reviewerActionEnum.all,
  }
  public render() {
    return (
      <>
        <ActionContainer>
          <ReviewerLogFilter
            filter={this.updateFilter}
            updateFilter={this.state.filter}
          />
        </ActionContainer>
        <ReviewerLogList
          searchFilter={this.state.filter}
          api={fetchReviewerLogsAPI}
          rowHeight={remToPx(10)}
        >
          {log => <ReviewerLogItem log={log} />}
        </ReviewerLogList>
      </>
    )
  }
  private updateFilter = (filter: reviewerActionEnum) => {
    this.setState({ filter })
  }
}
export default ReviewerLogContainer
