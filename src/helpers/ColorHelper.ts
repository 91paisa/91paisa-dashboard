import { customerStatus } from '../api/customer-api'
import {
  alertPending,
  alertRed,
  dark,
  grey,
  positiveGreen,
} from '../styles/colors'

export const getColorBasedOnCustomerStatus = (status: customerStatus) => {
  if (status === customerStatus.mandateNotInitialted) {
    return grey
  }
  if (status === customerStatus.mandateApproved) {
    return positiveGreen
  }
  if (status === customerStatus.mandateRejected) {
    return alertRed
  }
  if (status === customerStatus.mandateInitiated) {
    return alertPending
  }
  return dark
}
