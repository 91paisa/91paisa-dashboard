import * as React from 'react'
import { connect } from 'react-redux'
import {
  fetchReviewerLogsAPI,
  reviewerActionEnum,
  searchFilterType,
} from '../../../api/logs-api'
import { remToPx } from '../../../helpers/unit-helper'
import { IReduxState } from '../../../store/initial-state'
import { ActionContainer } from '../LogStyles'
import ReviewerLogFilter from './ReviewerLogFilter'
import ReviewerLogItem from './ReviewerLogItem'
import ReviewerLogList from './ReviewerLogList'

interface IProps {
  reviewers: any
}

class ReviewerLogContainer extends React.Component<IProps> {
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
          rowHeight={remToPx(7)}
        >
          {log => (
            <ReviewerLogItem
              log={log}
              reviewer={this.props.reviewers[log.reviewerId]}
              updateSearchFilter={this.updateFilter}
            />
          )}
        </ReviewerLogList>
      </>
    )
  }
  private updateFilter = (filter: searchFilterType) => {
    this.setState({ filter })
  }
}

const mapStateToProps = (state: IReduxState) => {
  const { reviewers } = state
  return {
    reviewers,
  }
}

export default connect(mapStateToProps)(ReviewerLogContainer)
