import { default as React, Fragment } from 'react'
import styled from 'styled-components'
import {
  ISplitTransaction,
  ITransaction,
  splitTransactionStatus,
} from '../../api/transaction-api'
import Space, { SpaceEnum } from '../../components/Space'
import {
  getSplitsWithCount,
  ISplitsWithCount,
} from '../../helpers/transaction-helper'
import SplitStatus from '../TransactionDetail/SplitStatus'
import NodalStatusContainer from '../TransactionDetail/status/NodalStatusContainer'

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

const TransactionStatusCell: React.SFC<ITransaction> = (
  props: ITransaction,
) => {
  return (
    <Container>
      <NodalStatusContainer {...props} />

      {props.transactionDetails && props.transactionDetails.length > 0
        ? splitStatusContainer(props.transactionDetails)
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
