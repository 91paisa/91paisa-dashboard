import * as React from 'react'
import styled from 'styled-components'
import { nodalStatusEnum } from '../../api/transaction-api'
import { getNodalTransactionColor } from '../../helpers/color-helper'
import { normalizeEnumKey } from '../../helpers/transaction-helper'
import { white } from '../../styles/colors'

interface IProps {
  status: nodalStatusEnum
}
const NodalStatus: React.SFC<IProps> = ({ status }: IProps) => (
  <Container status={status}>
    <Label status={status}>Nodal</Label>
    <Text>{normalizeEnumKey(nodalStatusEnum[status])}</Text>
  </Container>
)

const Label: any = styled.span`
  background: white;
  color: ${({ status }: any) => getNodalTransactionColor(status)};
  opacity: 0.94;
  height: 100%;
  font-weight: 600;
  border: 2px solid;
  border-radius: 0.2rem 0 0 0.2rem;
  padding: 0 0.4rem 0 0.2rem;
  font-style: normal;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`

const Text = styled.p`
  padding: 0 0.5rem 0 0.3rem;
  color: ${white};
  opacity: 1;
  line-height: 1.6rem;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  align-items: center;
  font-style: italic;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

const Container: any = styled.div`
  background: ${(props: any) => getNodalTransactionColor(props.status)};
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default NodalStatus
