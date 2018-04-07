import moment from 'moment'
import * as React from 'react'
import {
  ISplitTransaction,
  splitTransactionStatus,
} from '../../api/transaction-api'

interface IProps {
  splits: ISplitTransaction[] | undefined
}

const CompletedTimestamp: React.SFC<IProps> = ({ splits }: IProps) => {
  if (splits && splits.length > 0) {
    if (
      splits.filter(split => split.status !== splitTransactionStatus.success)
        .length === 0
    ) {
      return (
        <span>
          {moment(splits[splits.length - 1].updatedTimestamp).format('lll')}
        </span>
      )
    }
  }
  return <p style={{ letterSpacing: '6px' }}>---</p>
}
export default CompletedTimestamp
