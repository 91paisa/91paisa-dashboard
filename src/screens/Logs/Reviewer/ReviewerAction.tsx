import * as React from 'react'
import styled from 'styled-components'
import { reviewerActionEnum } from '../../../api/logs-api'
import { normalizeEnumKey } from '../../../helpers/transaction-helper'
import { identity, white } from '../../../styles/colors'
interface IProps {
  action: reviewerActionEnum
  onClick: () => void
}
const ReviewAction: React.SFC<IProps> = ({ action, onClick }: IProps) => (
  <Container onClick={onClick}>
    {normalizeEnumKey(reviewerActionEnum[action])}
  </Container>
)

const Container: any = styled.div`
  background: ${identity}
  border-radius: 0.2rem;
  display: flex;
  color: ${white};
  font-weight: 600;
  cursor: pointer;
  padding: 0 0.5rem;
  align-items: center;
`

export default ReviewAction
