import * as React from 'react'
import styled from 'styled-components'
import {
  ISplitTransaction,
  splitTransactionStatus,
} from '../../api/transaction-api'
import Space, { SpaceEnum } from '../../components/Space'
import { getSplitTransactionColor } from '../../helpers/color-helper'
import AmountCell from '../Transactions/AmountCell'
import TimeCell from '../Transactions/TimeCell'
import SplitStatus from './SplitStatus'

interface IProps {
  split: ISplitTransaction
}

interface IContainerProps {
  status: splitTransactionStatus
}

function renderIds(props: IProps) {
  return (
    <>
      {props.split.cancellationId ? (
        <>
          <p>
            <s># {props.split.id}</s>
          </p>
          <p># {props.split.cancellationId}</p>
        </>
      ) : (
        <p># {props.split.id}</p>
      )}
    </>
  )
}

const SplitItem: React.SFC<IProps> = props => (
  <Container status={props.split.status}>
    <div>
      <AmountCell style={{ fontSize: '1.3rem' }} amount={props.split.amount} />
      <Space height={SpaceEnum.xxs} />
      <TimeCell time={props.split.updatedTimestamp} />
    </div>
    <div style={{ textAlign: 'right', display: 'block' }}>
      {renderIds(props)}
      <SplitStatus status={props.split.status} />
    </div>
  </Container>
)

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  border-radius: 0.5rem;
  border-color: ${(props: IContainerProps) =>
    getSplitTransactionColor(props.status)};
  border-width: 2px;
  border-style: solid;
`

export default SplitItem
