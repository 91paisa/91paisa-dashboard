import moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
import { IIVRLogs } from '../../../api/logs-api'
import { getDDMMYYYY, getLT } from '../../../helpers/time-helper'
import { fog } from '../../../styles/colors'
import PhoneCell from '../../Customers/PhoneCell'
import AmountCell from '../../Transactions/AmountCell'

interface IProps {
  log: IIVRLogs
}
const IVRLogItem: React.SFC<IProps> = ({ log }: IProps) => (
  <Container>
    <p
      style={{ paddingLeft: '1rem', display: 'flex' }}
      title={`${getLT(log.createdTimestamp)} ${getDDMMYYYY(
        log.createdTimestamp,
      )}`}
    >
      {moment(log.createdTimestamp)
        .startOf('day')
        .fromNow()}
      <To>for</To>
      <p>{getCallDuration(log.createdTimestamp, log.updatedTimestamp)}</p>
    </p>
    {log.amount ? <AmountCell amount={log.amount} /> : <p />}

    <div style={{ display: 'flex' }}>
      <PhoneCell phone={log.customerPhone} />
      {log.beneficiaryPhone && (
        <>
          <To> to</To>
          <PhoneCell phone={log.beneficiaryPhone} />
        </>
      )}
    </div>
  </Container>
)

const getCallDuration = (start: string, end: string) => {
  const startDate = moment(start)
  const endDate = moment(end)
  return Math.floor(moment.duration(endDate.diff(startDate)).asSeconds()) + 's'
}

const To = styled.span`
  font-style: italic;
  color: ${fog};
  padding: 0 1rem;
`

const Container = styled.div`
  display: grid;
  align-items: center;
  height: 100%;
  grid-template-columns: 15rem 7rem 1fr;
`
export default IVRLogItem
