import * as React from 'react'
import styled from 'styled-components'
import { nodalStatusEnum, splitTransactionStatus } from '../../api/transaction-api'
import { getSplitTransactionColor } from '../../helpers/color-helper'
import { white } from '../../styles/colors'
import { normalizeSplitTransactionStatus } from '../Transactions/TransactionStatusCell'

interface IProps {
  status: splitTransactionStatus| nodalStatusEnum
  count?: number
}
const SplitStatus: React.SFC<IProps> = ({ status, count }: IProps) => (
  <Container status={status}>
    <Text>
      {normalizeSplitTransactionStatus(splitTransactionStatus[status])}
    </Text>
    {count && count > 1 && <Count status={status}>{count}</Count>}
  </Container>
)
const Count: any = styled.p`
  color: ${(props: any) => getSplitTransactionColor(props.status)};
  font-size: 0.9rem;
  padding: 0 0.2rem 0.1rem 0.2rem;
  font-weight: 700;
  height: 75%;
  margin: auto 0.3rem auto 0;
  background: white;
  border-radius: 0.2rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.07);
`
const Text = styled.p`
  padding: 0.2rem 0.7rem;
  color: ${white};
  font-size: 0.9rem;
  font-weight: 600;
  font-style: italic;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

const Container: any = styled.div`
  background: ${(props: any) => getSplitTransactionColor(props.status)};
  border-radius: 0.2rem;
  display: flex;
`

export default SplitStatus
