import { customerStatus } from '../api/customer-api'
import { splitTransactionStatus } from '../api/transaction-api'
import {
  alertPending,
  alertRed,
  dark,
  fog,
  grey,
  identity,
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

export const getSplitTransactionColor = (
  status: splitTransactionStatus,
): string => {
  switch (status) {
    case splitTransactionStatus.didNotTry:
      return fog
    case splitTransactionStatus.hold:
    case splitTransactionStatus.commit:
    case splitTransactionStatus.initiated:
    case splitTransactionStatus.processing:
      return alertPending
    case splitTransactionStatus.holdDeclined:
    case splitTransactionStatus.commitDeclined:
    case splitTransactionStatus.failure:
    case splitTransactionStatus.cancel:
      return alertRed

    case splitTransactionStatus.success:
      return positiveGreen

    case splitTransactionStatus.refundPending:
    case splitTransactionStatus.refundSuccess:
      return identity
  }
}
