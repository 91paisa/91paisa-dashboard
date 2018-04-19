import * as React from 'react'
import { reviewerActionEnum } from '../../../api/logs-api'
import { ActionContainer } from '../LogStyles'
import ReviewerLogFilter from './ReviewerLogFilter'
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
        {/*<LogsList*/}
        {/*searchFilter={'this.state.filter'}*/}
        {/*api={fetchReviewerLogsAPI}*/}
        {/*rowHeight={remToPx(10)}*/}
        {/*>*/}
        {/*{(log: any) => <ReviewerLogItem />}*/}
        {/*</LogsList>*/}
      </>
    )
  }
  private updateFilter = (filter: reviewerActionEnum) => {
    this.setState({ filter })
  }
}
export default ReviewerLogContainer
