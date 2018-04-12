import * as React from 'react'
import styled from 'styled-components'
import {
  nodalStatusEnum,
  splitTransactionStatus,
} from '../../api/transaction-api'
import { getSplitTransactionColor } from '../../helpers/color-helper'
import { white } from '../../styles/colors'
import { normalizeSplitTransactionStatus } from '../Transactions/TransactionStatusCell'

interface IProps {
  status: splitTransactionStatus | nodalStatusEnum
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

const Count: any = styled.span`
  background: white;
  color: ${({ status }: any) => getSplitTransactionColor(status)};
  opacity: 0.94;
  height: 100%;
  font-weight: 600;
  border: 2px solid;
  border-radius: 0 0.2rem 0.2rem 0;
  padding: 0 0.2rem;
  font-style: normal;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`

const Text = styled.p`
  padding: 0 0.5rem;
  color: ${white};
  opacity: 1;
  line-height: 1.6rem;
  font-size: 0.9rem;
  margin: auto;
  font-weight: 600;
  align-items: center;
  font-style: italic;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

const Container: any = styled.div`
  background: ${(props: any) => getSplitTransactionColor(props.status)};
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
`

export default SplitStatus
