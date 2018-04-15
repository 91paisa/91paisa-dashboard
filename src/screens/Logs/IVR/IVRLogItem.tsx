import moment from 'moment'
import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IIVRLogs } from '../../../api/logs-api'
import { getDDMMYYYY, getLT } from '../../../helpers/time-helper'
import { dark, fog, graphite } from '../../../styles/colors'
import PhoneCell from '../../Customers/PhoneCell'
import AmountCell from '../../Transactions/AmountCell'

interface IProps {
  log: IIVRLogs
}

function getAmountCell(log: IIVRLogs) {
  if (log.transaction.id && log.transaction.amount) {
    return (
      <HoverLink to={`/transactions/${log.transaction.id}/`}>
        <AmountCell amount={log.transaction.amount} />
      </HoverLink>
    )
  }
  if (log.transaction.amount) {
    return (
      <AmountCell
        style={{ color: graphite, fontWeight: 500 }}
        amount={log.transaction.amount}
      />
    )
  }
  return <p />
}

const IVRLogItem: React.SFC<IProps> = ({ log }: IProps) => (
  <Container>
    <div
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
    </div>
    {getAmountCell(log)}
    <HoverLink to={`/customers/${log.customer.phone}/`}>
      <Name>{log.customer.name}</Name>
    </HoverLink>
    <HoverLink to={`/customers/${log.customer.phone}/`}>
      <div style={{ display: 'flex' }}>
        <PhoneCell phone={log.customer.phone} />
        {log.beneficiaryPhone && (
          <>
            <To> to</To>
            <PhoneCell phone={log.beneficiaryPhone} />
          </>
        )}
      </div>
    </HoverLink>
  </Container>
)

const getCallDuration = (start: string, end: string) => {
  const startDate = moment(start)
  const endDate = moment(end)
  return Math.floor(moment.duration(endDate.diff(startDate)).asSeconds()) + 's'
}

const Name = styled.p`
  font-weight: 600;
`

const To = styled.span`
  font-style: italic;
  color: ${fog};
  padding: 0 1rem;
`

const Container = styled.div`
  display: grid;
  align-items: center;
  height: 100%;
  grid-template-columns: 16rem 8rem 11rem 1fr;
`

const HoverLink = styled(Link)`
  color: ${dark};
  &:hover {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    &:after {
      margin: auto 0;
      padding-left: 0.8rem;
      font-size: 0.8rem;
      content: '🔗';
    }
  }
  height: 100%;
  align-items: center;
  display: flex;
`
export default IVRLogItem
