import * as React from 'react'
import styled from 'styled-components'
import { nodalStatusEnum } from '../../api/transaction-api'
import { getNodalTransactionColor } from '../../helpers/color-helper'
import { white } from '../../styles/colors'
import { normalizeSplitTransactionStatus } from '../Transactions/TransactionStatusCell'

interface IProps {
  status: nodalStatusEnum
}
const NodalStatus: React.SFC<IProps> = ({ status }: IProps) => (
  <Container status={status}>
    <Text>
      Nodal: {normalizeSplitTransactionStatus(nodalStatusEnum[status])}
    </Text>
  </Container>
)

const Text = styled.p`
  padding: 0.2rem 0.7rem;
  color: ${white};
  font-size: 0.9rem;
  font-weight: 600;
  font-style: italic;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

const Container: any = styled.div`
  background: ${(props: any) => getNodalTransactionColor(props.status)};
  border-radius: 0.2rem;
  display: flex;
`

export default NodalStatus
