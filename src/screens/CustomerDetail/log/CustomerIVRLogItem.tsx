import * as React from 'react'
import styled from 'styled-components'
import { IIVRLogs } from '../../../api/logs-api'
import { fog } from '../../../styles/colors'
import { phone } from '../../../styles/screenSize'
import PhoneCell from '../../Customers/PhoneCell'
import IVRAmountCell from '../../Logs/IVR/IVRAmountCell'
import IVRDurationCell from '../../Logs/IVR/IVRDurationCell'

interface IProps {
  log: IIVRLogs
}

const CustomerIVRLogItem: React.SFC<IProps> = ({ log }: IProps) => (
  <Container>
    <IVRDurationCell
      createdTimestamp={log.createdTimestamp}
      updatedTimestamp={log.updatedTimestamp}
    />
    <IVRAmountCell transaction={log.transaction} />
    {log.beneficiaryPhone && (
      <div style={{ display: 'flex' }}>
        <span
          style={{
            color: fog,
            fontStyle: 'italic',
            paddingRight: '1rem',
          }}
        >
          to
        </span>
        <PhoneCell phone={log.beneficiaryPhone} />
      </div>
    )}
  </Container>
)

const Container = styled.div`
  display: grid;
  align-items: center;
  height: 100%;
  grid-template-columns: 15rem 8rem 14rem;
  @media (${phone}) {
    grid-template-columns: 1fr 0.5fr 1fr;
  }
`

export default CustomerIVRLogItem
