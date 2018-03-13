import * as React from 'react'
import styled from 'styled-components'
import { ICustomer } from '../../api/customer-api'
import { dark, white } from '../../styles/colors'
import StatusStrip from './StatusStrip'
interface IProps {
  customer: ICustomer | undefined
}
const CustomerCard: React.SFC<IProps> = _ => {
  if (_.customer === undefined) {
    return <div />
  }
  return (
    <Card>
      <StatusStrip status={_.customer.status} />
      <Name>{_.customer.name}</Name>
      <Phone>+91 - {_.customer.phone}</Phone>
    </Card>
  )
}

const Phone = styled.h1`
  font-size: 1.2rem;
  text-align: center;
`

const Name = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  color: ${dark};
`

const Card = styled.div`
  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.2);
  margin: 1rem 2rem;
  display: flex;
  background: ${white};
  flex-direction: column;
  padding-bottom: 1rem;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 4px 8px hsla(0, 0%, 0%, 0.1);
  }
  transition-duration: 300ms;
`
export default CustomerCard
