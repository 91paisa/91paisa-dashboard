import * as React from 'react'
import { customerStatus } from '../../api/customer-api'
import { getColorBasedOnCustomerStatus } from '../../helpers/ColorHelper'

interface IProps {
  status: customerStatus
}

const StatusStrip: React.SFC<IProps> = props => {
  return (
    <div
      style={{
        background: getColorBasedOnCustomerStatus(props.status),
        borderRadius: '4px 4px 0 0',
        height: '0.4rem',
        marginBottom: '0.8rem',
      }}
      title={customerStatus[props.status]}
    />
  )
}
export default StatusStrip
