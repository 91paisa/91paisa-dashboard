import { Component, default as React } from 'react'
import styled from 'styled-components'
import { ApproveButton, RejectButton } from '../../components/Buttons'
import Space, { SpaceEnum } from '../../components/Space'

class TransactionApprovalButton extends Component {
  public render() {
    return (
      <Container>
        <ApproveButton>Approve</ApproveButton>
        <Space width={SpaceEnum.xxl} />
        <RejectButton>Reject</RejectButton>
      </Container>
    )
  }
}

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
`

export default TransactionApprovalButton
