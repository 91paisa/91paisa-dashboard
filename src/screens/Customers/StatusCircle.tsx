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
      borderRadius: '60px',
      boxShadow: 'inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.20)',
      height: '0.7rem',
      marginLeft: '1rem',
      width: '0.7rem',
    }}
    title={customerStatus[props.status]}
  />
)

export default StatusCircle
