import * as React from 'react'
import styled from 'styled-components'
import { settlementStatusEnum } from '../../../api/transaction-api'
import { getRouteColor } from '../../../helpers/color-helper'
import { normalizeEnumKey } from '../../../helpers/transaction-helper'
import { white } from '../../../styles/colors'

interface IProps {
  status: settlementStatusEnum
}
const SettlementStatus: React.SFC<IProps> = ({ status }: IProps) => (
  <div>
    <Text status={status}>
      {normalizeEnumKey(settlementStatusEnum[status])}
    </Text>
  </div>
)

const Text: any = styled.p`
  padding: 0.2rem 1rem;
  margin: 0.1rem 0;
  color: ${white};
  opacity: 1;
  line-height: 1.6rem;
  font-size: 0.9rem;
  font-weight: 600;
  align-items: center;
  display: inline;
  text-align: right;
  font-style: italic;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  background: ${(props: any) => getRouteColor(props.status)};
`

export default SettlementStatus
