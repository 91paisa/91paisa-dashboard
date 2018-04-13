import { customerStatus } from '../api/customer-api'
import { nodalStatusEnum, splitTransactionStatus } from '../api/transaction-api'
import {
  alertPending,
  alertRed,
  dark,
  graphite,
  grey,
  identity,
  positiveGreen,
  white,
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
      return graphite
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

export const getNodalTransactionColor = (status: nodalStatusEnum): string => {
  switch (status) {
    case nodalStatusEnum.notInitiated:
      return graphite
    case nodalStatusEnum.credited:
      return positiveGreen
    case nodalStatusEnum.dispute:
    case nodalStatusEnum.failed:
    case nodalStatusEnum.internalError:
      return alertRed
    case nodalStatusEnum.authorized:
      return identity
    case nodalStatusEnum.initiates:
      return alertPending
    case nodalStatusEnum.noop:
      return white
  }
}
