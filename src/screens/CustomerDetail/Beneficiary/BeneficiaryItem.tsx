import * as React from 'react'
import styled from 'styled-components'
import { beneficiaryStatus, IBeneficiary } from '../../../api/customer-api'
import { alertRed, positiveGreen } from '../../../styles/colors'
import PhoneCell from '../../Customers/PhoneCell'

interface IProps {
  beneficiary: IBeneficiary
}

interface IContainerProps {
  status: beneficiaryStatus
}

const BeneficiaryItem: React.SFC<IProps> = props => (
  <Container status={props.beneficiary.status}>
    <PhoneCell
      fontSize={{ fontSize: '1.4rem' }}
      phone={props.beneficiary.phone}
    />
    <Name>{props.beneficiary.name}</Name>
    <AccountData>
      {getSpacedAccount(props.beneficiary.account.toString())}
    </AccountData>
    <AccountData>{getSpacedIFSC(props.beneficiary.ifsc)}</AccountData>
  </Container>
)

export function getSpacedAccount(account: string): string {
  let i = 0
  const splitAccount = []
  while (i < account.length) {
    if (i + 4 >= account.length) {
      splitAccount.push(account.substring(i))
    } else {
      splitAccount.push(account.substring(i, i + 4))
    }
    i += 4
  }
  return splitAccount.join(' ').toString()
}

export function getSpacedIFSC(ifsc: string): string {
  return ifsc.substring(0, 5) + ' ' + ifsc.substring(5)
}

const Name = styled.p`
  font-size: 1.3rem;
  padding-bottom: 0.4rem;
`
const AccountData = styled.p`
  font-family: monospace, 'Museo Sans', 'Open Sans', Helvetica;
  font-size: 1.2rem;
  padding-bottom: 0.4rem;
`
const Container = styled.div`
  display: inline;
  padding: 1rem;
  margin: 1rem 0 0 1rem;
  border-radius: 4px;
  border-color: ${(props: IContainerProps) =>
    props.status === beneficiaryStatus.verified ? positiveGreen : alertRed};
  border-width: 1px;
  border-style: solid;
  &:hover {
    box-shadow: inset 0 2px 4px hsla(0, 0%, 0%, 0.05);
  }
`

export default BeneficiaryItem
