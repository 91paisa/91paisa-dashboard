import * as React from 'react'
import styled from 'styled-components'
import {
  customerStatus,
  IBeneficiary,
  ICustomer,
  ICustomerStatus,
} from '../../api/customer-api'
import Card from '../../components/Card'
import Space, { SpaceEnum } from '../../components/Space'
import { getDDMMYY, getLT } from '../../helpers/time-helper'
import { identity } from '../../styles/colors'
import MandateTimestampInitiatedDuration from '../Customers/MandateTimestampInitiatedDuration'
import StatusCircle from '../Customers/StatusCircle'

const CustomerFlowBox: React.SFC<ICustomer> = (props: ICustomer) => (
  <Card>{renderMessage({ ...props })}</Card>
)

function renderCustomerNotVerified(code: customerStatus) {
  return (
    <FlexRow>
      <StatusCircle status={code} /> <Space width={SpaceEnum.xs} />
      <p>Customer has not been verified yet.</p>
    </FlexRow>
  )
}

function renderMandateNotInitiated(code: customerStatus) {
  return (
    <FlexRow>
      <StatusCircle status={code} /> <Space width={SpaceEnum.xs} />
      <p>Customer has been verified. Please fill in the mandate form next.</p>
    </FlexRow>
  )
}

function renderMandateRejected(
  code: customerStatus,
  rejectionReason: string | undefined,
) {
  return (
    <FlexRow>
      <StatusCircle status={code} /> <Space width={SpaceEnum.xs} />
      <p>
        <span>Mandate has been rejected.</span>
        {rejectionReason && (
          <span>
            Reason:{' '}
            <strong>
              <i>{rejectionReason}</i>
            </strong>.
          </span>
        )}
      </p>
    </FlexRow>
  )
}

function renderMandateInitiated(status: ICustomerStatus) {
  return (
    <FlexRow>
      {status.mandateTimestamp && (
        <p>
          Mandate was submitted{' '}
          <strong>
            <MandateTimestampInitiatedDuration {...status.mandateTimestamp} />
          </strong>{' '}
          on {getDDMMYY(status.mandateTimestamp.initiated)} at{' '}
          {getLT(status.mandateTimestamp.initiated)}.{' '}
          <span>Waiting for bank's approval now.</span>
        </p>
      )}
    </FlexRow>
  )
}

function renderMandateApprovedWithTimestamp(
  status: ICustomerStatus,
  beneficiaries: IBeneficiary[] | undefined,
) {
  return (
    <span>
      Mandate was been approved on{' '}
      {status.mandateTimestamp &&
        status.mandateTimestamp.completed && (
          <span>
            {getDDMMYY(status.mandateTimestamp.completed)} at{' '}
            {getLT(status.mandateTimestamp.completed)}.
          </span>
        )}
      {!beneficiaries && (
        <span>Please continue by adding in a beneficiary</span>
      )}
    </span>
  )
}

const renderMessage = ({ status, beneficiaries }: ICustomer) => {
  if (status.code === customerStatus.unverified) {
    return renderCustomerNotVerified(status.code)
  }
  if (status.code === customerStatus.mandateNotInitiated) {
    return renderMandateNotInitiated(status.code)
  }
  if (status.code === customerStatus.mandateRejected) {
    return renderMandateRejected(status.code, status.rejectionReason)
  }

  if (status.code === customerStatus.mandateInitiated) {
    return renderMandateInitiated(status)
  }
  if (
    status.code === customerStatus.mandateApproved &&
    status.mandateTimestamp &&
    status.mandateTimestamp.completed
  ) {
    return renderMandateApprovedWithTimestamp(status, beneficiaries)
  }
  if (status.code === customerStatus.mandateApproved) {
    return <span>Mandate has been approved.</span>
  }

  return (
    <p>
      NEW STATE!!! I HAVE NO CLUE HOW TO HANDLE THIS.{' '}
      <a
        href={
          'https://github.com/91paisa/91paisa-dashboard/issues/new?template=Bug_report.md'
        }
        target={'_blank'}
        style={{ color: identity }}
      >
        PLEASE FILE AN ISSUE
      </a>
    </p>
  )
}

const FlexRow = styled.div`
  display: flex;
`

export default CustomerFlowBox
