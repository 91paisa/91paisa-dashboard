import { default as React, Fragment } from 'react'
import { ISplitTransaction } from '../../api/transaction-api'
import Space, { SpaceEnum } from '../../components/Space'
import {
  getSplitsWithCount,
  ISplitsWithCount,
} from '../../helpers/transaction-helper'
import SplitStatus from '../TransactionDetail/SplitStatus'

interface IProps {
  splits: ISplitTransaction[] | undefined
}

const TransactionStatusCell: React.SFC<IProps> = props => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
      }}
    >
      {props.splits &&
        getSplitsWithCount(props.splits).map(
          (splitWithCount: ISplitsWithCount, index) => (
            <Fragment key={index}>
              <SplitStatus
                status={splitWithCount.status}
                count={splitWithCount.count}
              />
              <Space width={SpaceEnum.s} />
            </Fragment>
          ),
        )}
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
