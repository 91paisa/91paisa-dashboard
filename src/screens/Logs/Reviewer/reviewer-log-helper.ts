import { reviewerActionEnum } from '../../../api/logs-api'

export const getActionDetailStarting = (action: reviewerActionEnum) => {
  switch (action) {
    case reviewerActionEnum.c_create:
      return 'Created customer'
    case reviewerActionEnum.c_verify:
      return 'Verified customer'
    case reviewerActionEnum.c_otp:
      return 'Retried OTP verification for customer'
    case reviewerActionEnum.c_nodalId:
      return 'Started e-mandate generation process for customer'
    case reviewerActionEnum.c_mandate:
      return 'Sent e-mandate request to server for customer'
    case reviewerActionEnum.c_update:
      return 'Updated account number and IFSC for customer'
    case reviewerActionEnum.b_create:
      return 'Created beneficiary'
    case reviewerActionEnum.b_verify:
      return 'Verified beneficiary'
    case reviewerActionEnum.b_otp:
      return 'Retried OTP verification for adding beneficiary'
    case reviewerActionEnum.tx_approved:
      return 'Approved transaction worth'
    case reviewerActionEnum.tx_rejected:
      return 'Rejected transaction worth'
    default:
      return 'whhaaaat???'
  }
}
