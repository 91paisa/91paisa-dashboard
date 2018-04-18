import * as React from 'react'
import styled from 'styled-components'
import Avatar from '../../../components/Avatar'

class ReviewerLogItem extends React.Component {
  public render() {
    return (
      <Container>
        <Avatar />
        <div>
          <p>droan - createCustomer</p>
          <p>Created customer Kumar Tanmay(+91 9181818555)</p>
          <p>
            4 hrs ago <span> 12:00pm 14/04/18</span>
          </p>
        </div>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

export default ReviewerLogItem
