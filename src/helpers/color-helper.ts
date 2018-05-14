import { customerStatus } from '../api/customer-api'
import {
  nodalStatusEnum,
  refundStatusEnum,
  settlementStatusEnum,
  splitTransactionStatus,
} from '../api/transaction-api'
import {
  alertPending,
  alertRed,
  brown,
  dark,
  graphite,
  grey,
  identity,
  positiveGreen,
  white,
} from '../styles/colors'

export const getColorBasedOnCustomerStatus = (status: customerStatus) => {
  if (status === customerStatus.mandateNotInitiated) {
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
    case splitTransactionStatus.insufficientBalance:
      return graphite
    case splitTransactionStatus.hold:
    case splitTransactionStatus.commit:
    case splitTransactionStatus.initiated:
    case splitTransactionStatus.processing:
    case splitTransactionStatus.cancelPending:
      return alertPending
    case splitTransactionStatus.holdDeclined:
    case splitTransactionStatus.commitDeclined:
    case splitTransactionStatus.failure:
    case splitTransactionStatus.cancelled:
      return alertRed

    case splitTransactionStatus.success:
      return positiveGreen

    case splitTransactionStatus.refundPending:
    case splitTransactionStatus.refundSuccess:
      return identity
  }
}

export const getNodalColor = (status: nodalStatusEnum): string => {
  switch (status) {
    case nodalStatusEnum.notInitiated:
      return graphite
    case nodalStatusEnum.settled:
      return positiveGreen
    case nodalStatusEnum.dispute:
    case nodalStatusEnum.failed:
    case nodalStatusEnum.internalError:
      return alertRed
    case nodalStatusEnum.authorized:
      return identity
    case nodalStatusEnum.initiated:
    case nodalStatusEnum.credited:
      return alertPending
    case nodalStatusEnum.routed:
      return brown
    case nodalStatusEnum.noop:
      return white
  }
}

export const getSettlementColor = (status: settlementStatusEnum): string => {
  switch (status) {
    case settlementStatusEnum.notTriedYet:
      return graphite
    case settlementStatusEnum.ready:
      return identity
    case settlementStatusEnum.started:
      return alertPending
    case settlementStatusEnum.success:
      return positiveGreen
    default:
      return dark
  }
}

export const getRefundColor = (status: refundStatusEnum): string => {
  switch (status) {
    case refundStatusEnum.notTriedYet:
    return graphite
    case refundStatusEnum.ready:
      return alertPending
    case refundStatusEnum.routed:
    case refundStatusEnum.success:
      return positiveGreen
  }
}
