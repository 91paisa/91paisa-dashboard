import * as React from 'react'
import { IReviewer } from '../../../../api/reviewer-api'
import { Container, Label } from './styles'
interface IProps {
  reviewer: IReviewer
  resetFilter: () => void
}
class ReviewerNameFilter extends React.Component<IProps> {
  public render() {
    return (
      <>
        <Container style={{ marginRight: '1rem' }}>
          <Label>Reviewer</Label>
          <p style={{ padding: '0 1rem' }}>{this.props.reviewer.name}</p>
        </Container>
        <Container>
          <button
            style={{
              background: 'none',
              border: 'none',
              padding: '0.2rem',
            }}
            onClick={this.props.resetFilter}
          >
            X
          </button>
        </Container>
      </>
    )
  }
}

export default ReviewerNameFilter
