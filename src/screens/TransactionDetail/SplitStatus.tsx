import * as React from 'react'
import styled from 'styled-components'
import { splitTransactionStatus } from '../../api/transaction-api'
import { getSplitTransactionColor } from '../../helpers/color-helper'
import { white } from '../../styles/colors'
import { normalizeSplitTransactionStatus } from '../Transactions/TransactionStatusCell'

interface IProps {
  status: splitTransactionStatus
}
const SplitStatus: React.SFC<IProps> = ({ status }: IProps) => (
  <Container status={status}>
    {normalizeSplitTransactionStatus(splitTransactionStatus[status])}
  </Container>
)

const Container: any = styled.p`
  padding: 0.1rem 0.7rem;
  background: ${(props: any) => getSplitTransactionColor(props.status)};
  border-radius: 0.5rem;
  display: inline;
  color: ${white};
  font-size: 0.9rem;
  font-style: italic;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

export default SplitStatus
