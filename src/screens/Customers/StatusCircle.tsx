import * as React from 'react'
import { customerStatus } from '../../api/customer-api'
import { getColorBasedOnCustomerStatus } from '../../helpers/color-helper'

interface IProps {
  status: customerStatus
}

const StatusCircle: React.SFC<IProps> = props => (
  <div
    style={{
      background: getColorBasedOnCustomerStatus(props.status),
      borderRadius: '50%',
      boxShadow: 'inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.1)',
      height: '10px',
      margin: 'auto 3px',
      width: '10px',
    }}
    title={customerStatus[props.status]}
  />
)

export default StatusCircle
