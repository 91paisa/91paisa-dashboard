import { default as React, Fragment } from 'react'
import styled from 'styled-components'
import {
  INodal,
  IRefund,
  ISplitTransaction,
  nodalStatusEnum,
  splitTransactionStatus,
} from '../../api/transaction-api'
import Space, { SpaceEnum } from '../../components/Space'
import {
  getSplitsWithCount,
  ISplitsWithCount,
} from '../../helpers/transaction-helper'
import SplitStatus from '../TransactionDetail/SplitStatus'
import RefundStatus from '../TransactionDetail/status/RefundStatus'

interface IProps {
  splits: ISplitTransaction[] | undefined
  nodal: INodal
  refund: IRefund | undefined
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

const insufficientBalance = () => (
  <SplitStatus status={splitTransactionStatus.insufficientBalance} />
)

const TransactionStatusCell: React.SFC<IProps> = ({
  splits,
  nodal,
  refund,
}: IProps) => {
  return (
    <Container>
      {nodal.status !== nodalStatusEnum.noop && (
        <>
          {refund && (
            <>
              <RefundStatus {...refund} />
              <Space width={SpaceEnum.s} />
            </>
          )}
        </>
      )}

      {splits && splits.length > 0
        ? splitStatusContainer(splits)
        : insufficientBalance()}
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

export default TransactionStatusCell
