import * as React from 'react'
import { customerStatus } from '../../api/customer-api'
import {
  alertPending,
  alertRed,
  dark,
  grey,
  positiveGreen,
} from '../../styles/colors'

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

export const getColorBasedOnCustomerStatus = (status: customerStatus) => {
  if (status === customerStatus.unverified) {
    return grey
  }
  if (status === customerStatus.mandateApproved) {
    return positiveGreen
  }
  if (status === customerStatus.mandateRejected) {
    return alertRed
  }
  if (status === customerStatus.mandatePending) {
    return alertPending
  }
  return dark
}

export default StatusStrip
