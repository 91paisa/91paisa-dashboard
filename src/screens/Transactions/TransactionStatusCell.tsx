import { default as React, Fragment } from 'react'
import styled from 'styled-components'
import {
  INodal,
  ISplitTransaction,
  nodalStatusEnum,
} from '../../api/transaction-api'
import Space, { SpaceEnum } from '../../components/Space'
import {
  getSplitsWithCount,
  ISplitsWithCount,
} from '../../helpers/transaction-helper'
import NodalStatus from '../TransactionDetail/NodalStatus'
import SplitStatus from '../TransactionDetail/SplitStatus'

interface IProps {
  splits: ISplitTransaction[] | undefined
  nodal: INodal
}

function splitStatusContainer(splits: ISplitTransaction[]) {
  return getSplitsWithCount(splits).map(
    (splitWithCount: ISplitsWithCount, index) => (
      <Fragment key={index}>
        <SplitStatus
          status={splitWithCount.status}
          count={splitWithCount.count}
        />
        <Space width={SpaceEnum.s} />
      </Fragment>
    ),
  )
}

const TransactionStatusCell: React.SFC<IProps> = ({
  splits,
  nodal,
}: IProps) => {
  return (
    <Container>
      {nodal.status !== nodalStatusEnum.noop && (
        <>
          <NodalStatus status={nodal.status} />
          <Space width={SpaceEnum.l} />
        </>
      )}

      {splits && splitStatusContainer(splits)}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  padding-right: 0.5rem;
`

export const normalizeSplitTransactionStatus = (status: string) => {
  return status.split('').map(char => {
    if (char === char.toUpperCase()) {
      return ` ${char.toLowerCase()}`
    }
    return char
  })
}

export default TransactionStatusCell
