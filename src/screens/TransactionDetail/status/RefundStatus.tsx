import * as React from 'react'
import { IRefund, refundStatusEnum } from '../../../api/transaction-api'
import { normalizeEnumKey } from '../../../helpers/transaction-helper'
import {
  NodalStatusContainer,
  NodalStatusLabel,
  NodalStatusText,
  statusTypeEnum,
} from './Style'

// TODO refactor using compound components
const RefundStatus: React.SFC<IRefund> = ({ status }: IRefund) => (
  <NodalStatusContainer statusCode={status} statusType={statusTypeEnum.refund}>
    <NodalStatusLabel statusCode={status} statusType={statusTypeEnum.refund}>
      Refund
    </NodalStatusLabel>
    <NodalStatusText>
      {normalizeEnumKey(refundStatusEnum[status])}
    </NodalStatusText>
  </NodalStatusContainer>
)

export default RefundStatus
