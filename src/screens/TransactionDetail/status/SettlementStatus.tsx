import * as React from 'react'
import { ISettlement, settlementStatusEnum } from '../../../api/transaction-api'
import Space, { SpaceEnum } from '../../../components/Space'
import { normalizeEnumKey } from '../../../helpers/transaction-helper'
import {
  NodalStatusContainer,
  NodalStatusLabel,
  NodalStatusText,
  statusTypeEnum,
} from './Style'

interface IProps {
  title: string
  settlement: ISettlement | undefined
}
const SettlementStatus: React.SFC<IProps> = ({ title, settlement }: IProps) => (
  <>
    {settlement && (
      <>
        <NodalStatusContainer
          statusCode={settlement.status}
          statusType={statusTypeEnum.settlement}
        >
          <NodalStatusLabel
            statusCode={settlement.status}
            statusType={statusTypeEnum.settlement}
          >
            {title}
          </NodalStatusLabel>
          <NodalStatusText>
            {normalizeEnumKey(settlementStatusEnum[settlement.status])}
          </NodalStatusText>
        </NodalStatusContainer>
        <Space width={SpaceEnum.xs} />
      </>
    )}
  </>
)

export default SettlementStatus
