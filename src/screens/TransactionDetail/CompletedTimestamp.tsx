import * as React from 'react'
import { ISplitTransaction } from '../../api/transaction-api'
import { isTransactionComplete } from '../../helpers/transaction-helper'
import TimeCell from '../Transactions/TimeCell'

interface IProps {
  splits: ISplitTransaction[] | undefined
}

const CompletedTimestamp: React.SFC<IProps> = ({ splits }: IProps) => {
  if (splits && splits.length > 0) {
    if (isTransactionComplete(splits)) {
      return <TimeCell time={splits[splits.length - 1].updatedTimestamp} />
    }
  }
  return <p style={{ letterSpacing: '6px' }}>---</p>
}
export default CompletedTimestamp
