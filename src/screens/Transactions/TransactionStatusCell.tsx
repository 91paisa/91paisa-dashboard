import * as React from 'react'
import {
  ISplitTransaction,
  splitTransactionStatus,
} from '../../api/transaction-api'

interface IProps {
  splits: ISplitTransaction[]
}

const TransactionStatusCell: React.SFC<IProps> = props => {
  const splitTransactionStatuses: string[] = props.splits.map(
    tx => splitTransactionStatus[tx.status],
  )
  const statuses = Array.from(new Set(splitTransactionStatuses))

  return (
    <div style={{ display: 'flex' }}>
      {statuses.map(status => (
        <p key={status} style={{ paddingRight: '1rem' }}>
          {normalizeSplitTransactionStatus(status)}
        </p>
      ))}
    </div>
  )
}

export const normalizeSplitTransactionStatus = (status: string) => {
  return status.split('').map(char => {
    if (char === char.toUpperCase()) {
      return ` ${char.toLowerCase()}`
    }
    return char
  })
}

export default TransactionStatusCell
