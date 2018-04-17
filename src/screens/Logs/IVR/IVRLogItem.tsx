import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IIVRLogs } from '../../../api/logs-api'
import HoverTooltip from '../../../components/HoverTooltip'
import { fog } from '../../../styles/colors'
import PhoneCell from '../../Customers/PhoneCell'
import IVRAmountCell from './IVRAmountCell'
import IVRDurationCell from './IVRDurationCell'

interface IProps {
  log: IIVRLogs
  customerPhoneToSearch?: (customerPhone: string) => void
}

const IVRLogItem: React.SFC<IProps> = ({
  log,
  customerPhoneToSearch,
}: IProps) => (
  <Container>
    <IVRDurationCell
      createdTimestamp={log.createdTimestamp}
      updatedTimestamp={log.updatedTimestamp}
    />
    <IVRAmountCell transaction={log.transaction} />
    <HoverTooltip
      tooltip={'filter search 🔍'}
      onClick={() => {
        if (customerPhoneToSearch) {
          return customerPhoneToSearch(log.customer.phone)
        }
      }}
    >
      <Name>{log.customer.name}</Name>
    </HoverTooltip>
    <HoverTooltip tooltip={'customer profile 🔗'}>
      <Link
        style={{ display: 'flex' }}
        to={`/customers/${log.customer.phone}/`}
      >
        <PhoneCell phone={log.customer.phone} />
        {log.beneficiaryPhone && (
          <>
            <To> to</To>
            <PhoneCell phone={log.beneficiaryPhone} />
          </>
        )}
      </Link>
    </HoverTooltip>
  </Container>
)

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
  grid-template-columns: 16rem 9rem 12rem 1fr;
`
export default IVRLogItem
