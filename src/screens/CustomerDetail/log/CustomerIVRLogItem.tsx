import * as React from 'react'
import styled from 'styled-components'
import { IIVRLogs } from '../../../api/logs-api'
import { fog } from '../../../styles/colors'
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
    <IVRAmountCell {...log.transaction} />
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
  grid-template-columns: 16rem 9rem 12rem 1fr;
`

export default CustomerIVRLogItem
