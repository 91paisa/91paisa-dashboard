import * as React from 'react'
import { nodalStatusEnum } from '../../../api/transaction-api'
import Space, { SpaceEnum } from '../../../components/Space'
import { normalizeEnumKey } from '../../../helpers/transaction-helper'
import {
  NodalStatusContainer,
  NodalStatusLabel,
  NodalStatusText,
  statusTypeEnum,
} from './Style'
interface IProps {
  statusCode: nodalStatusEnum
}
const NodalStatus: React.SFC<IProps> = ({ statusCode }: IProps) => {
  if (!(statusCode < nodalStatusEnum.routed)) {
    return null
  }
  return (
    <>
      <NodalStatusContainer
        statusCode={statusCode}
        statusType={statusTypeEnum.nodal}
      >
        <NodalStatusLabel
          statusCode={statusCode}
          statusType={statusTypeEnum.nodal}
        >
          Nodal
        </NodalStatusLabel>
        <NodalStatusText>
          {normalizeEnumKey(nodalStatusEnum[statusCode])}
        </NodalStatusText>
      </NodalStatusContainer>
      <Space width={SpaceEnum.xs} />
    </>
  )
}

export default NodalStatus
