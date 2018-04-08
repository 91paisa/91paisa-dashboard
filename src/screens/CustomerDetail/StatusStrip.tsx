import * as React from 'react'
import { customerStatus } from '../../api/customer-api'
import { getColorBasedOnCustomerStatus } from '../../helpers/color-helper'

interface IProps {
  status: customerStatus
}

const StatusStrip: React.SFC<IProps> = props => {
  return (
    <div
      style={{
        background: getColorBasedOnCustomerStatus(props.status),
        borderRadius: '0.5rem 0.5rem 0 0',
        height: '0.4rem',
        marginBottom: '0.8rem',
      }}
      title={customerStatus[props.status]}
    />
  )
}
export default StatusStrip
