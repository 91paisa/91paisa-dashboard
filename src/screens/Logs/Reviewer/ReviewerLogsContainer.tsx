import * as React from 'react'
import { ActionContainer } from '../LogStyles'
import ReviewerLogItem from './ReviewerLogItem'

class ReviewerLogsContainer extends React.Component {
  public state = {
    filter: '',
  }
  public render() {
    return (
      <>
        <ActionContainer>
          <div>
            Filter:
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </ActionContainer>
        <ReviewerLogItem />
        <ReviewerLogItem />
        <ReviewerLogItem />
      </>
    )
  }
}
export default ReviewerLogsContainer
