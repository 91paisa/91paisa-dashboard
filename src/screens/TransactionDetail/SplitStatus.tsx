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

const Container: any = styled.span`
  padding: 0.2rem 0.4rem;
  background: ${(props: any) => getSplitTransactionColor(props.status)};
  border-radius: 0.5rem;
  color: ${white};
  font-style: italic;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

export default SplitStatus
