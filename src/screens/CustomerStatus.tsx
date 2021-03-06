import * as React from 'react'
import styled from 'styled-components'
import { customerStatus, ICustomerStatus } from '../api/customer-api'
import Space, { SpaceEnum } from '../components/Space'
import { normalizeEnumKey } from '../helpers/transaction-helper'
import { graphite } from '../styles/colors'
import MandateTimestampInitiatedDuration from './Customers/MandateTimestampInitiatedDuration'
import StatusCircle from './Customers/StatusCircle'

const CustomerStatus: React.SFC<ICustomerStatus> = ({
  code,
  rejectionReason,
  mandateTimestamp,
}: ICustomerStatus) => (
  <Container status={code}>
    <StatusCircle status={code} />
    <Space width={SpaceEnum.xs} />
    <Detail>{normalizeEnumKey(customerStatus[code])}</Detail>
    <Space width={SpaceEnum.xs} />
    {code === customerStatus.mandateInitiated &&
      mandateTimestamp && (
        <Detail>
          <MandateTimestampInitiatedDuration {...mandateTimestamp} />
        </Detail>
      )}
  </Container>
)

const Container: any = styled.div`
  display: flex;
  border-radius: 20rem;
  color: ${graphite};
`

const Detail = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
  font-style: italic;
`

export default CustomerStatus
