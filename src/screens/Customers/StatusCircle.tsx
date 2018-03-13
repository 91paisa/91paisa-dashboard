import * as React from 'react'
import { customerStatus } from '../../api/customer-api'
import { getColorBasedOnCustomerStatus } from '../CustomerDetail/StatusStrip'
interface IProps {
  status: customerStatus
}
const StatusCircle: React.SFC<IProps> = props => {
  return (
    <div
      style={{
        background: getColorBasedOnCustomerStatus(props.status),
        borderRadius: '60px',
        boxShadow: 'inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.25)',
        height: '1rem',
        width: '1rem',
      }}
    />
  )
}

export default StatusCircle