import * as React from 'react'
import { IRefund, refundStatusEnum } from '../../../api/transaction-api'
import Space, { SpaceEnum } from '../../../components/Space'
import { normalizeEnumKey } from '../../../helpers/transaction-helper'
import {
  NodalStatusContainer,
  NodalStatusLabel,
  NodalStatusText,
  statusTypeEnum,
} from './Style'

const RefundStatus: React.SFC<IRefund> = ({ status }: IRefund) => (
  <>
    <NodalStatusContainer
      statusCode={status}
      statusType={statusTypeEnum.refund}
    >
      <NodalStatusLabel statusCode={status} statusType={statusTypeEnum.refund}>
        Refund
      </NodalStatusLabel>
      <NodalStatusText>
        {normalizeEnumKey(refundStatusEnum[status])}
      </NodalStatusText>
    </NodalStatusContainer>
    <Space width={SpaceEnum.xs} />
  </>
)

export default RefundStatus
