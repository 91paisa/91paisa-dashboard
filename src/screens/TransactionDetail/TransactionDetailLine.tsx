import * as React from 'react'
import {
  ISplitTransaction,
  splitTransactionStatus,
} from '../../api/transaction-api'
import { alertPending, alertRed, positiveGreen } from '../../styles/colors'

interface IProps {
  splits: ISplitTransaction[] | undefined
}

const TransactionDetailLine: React.SFC<IProps> = props => {
  if (!props.splits) {
    return <div />
  }
  const statusColor = getStatusColor(props.splits)
  return <div style={{ background: statusColor }} />
}

const getStatusColor = (splits: ISplitTransaction[]): string => {
  if (
    splits.filter(trx => trx.status !== splitTransactionStatus.success)
      .length === 0
  ) {
    return positiveGreen
  }
  if (
    splits.filter(trx => trx.status !== splitTransactionStatus.failure)
      .length === 0
  ) {
    return alertRed
  }
  return alertPending
}

export default TransactionDetailLine
