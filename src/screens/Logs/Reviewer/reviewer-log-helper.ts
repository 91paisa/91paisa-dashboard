import { reviewerActionEnum } from '../../../api/logs-api'

export const getActionDetailStarting = (action: reviewerActionEnum) => {
  switch (action) {
    case reviewerActionEnum.c_create:
      return 'Creating customer'
    case reviewerActionEnum.c_verify:
      return 'Verifying customer'
    case reviewerActionEnum.c_otp:
      return 'Retried OTP verification for customer'
    case reviewerActionEnum.c_nodalId:
      return 'Starting e-mandate generation process for customer'
    case reviewerActionEnum.c_mandate:
      return 'Sending e-mandate request to server for customer'
    case reviewerActionEnum.c_update:
      return 'Updating account number and IFSC for customer'
    case reviewerActionEnum.b_create:
      return 'Creating beneficiary'
    case reviewerActionEnum.b_verify:
      return 'Verifying beneficiary'
    case reviewerActionEnum.b_otp:
      return 'Retried OTP verification for adding beneficiary'
    case reviewerActionEnum.tx_approved:
      return 'Approving transaction worth'
    case reviewerActionEnum.tx_rejected:
      return 'Rejecting transaction worth'
    default:
      return 'whhaaaat???'
  }
}
