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
import ReviewerLogFilter from './filter/ReviewerLogFilter'
import ReviewerNameFilter from './filter/ReviewerNameFilter'
import ReviewerLogItem from './ReviewerLogItem'
import ReviewerLogList from './ReviewerLogList'

interface IProps {
  reviewers: any
}
interface IState {
  filter: reviewerActionEnum | string
}
class ReviewerLogContainer extends React.Component<IProps, IState> {
  public initialState = {
    filter: reviewerActionEnum.all,
  }
  public state = {
    ...this.initialState,
  }

  public render() {
    return (
      <>
        <ActionContainer>
          {isNaN(Number(this.state.filter.toString())) ? (
            <ReviewerNameFilter
              reviewer={this.props.reviewers[this.state.filter]}
              resetFilter={() => this.setState({ ...this.initialState })}
            />
          ) : (
            <ReviewerLogFilter
              filter={this.updateFilter}
              updateFilter={this.state.filter}
            />
          )}
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
