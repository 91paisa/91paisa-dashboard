import * as React from 'react'
import styled from 'styled-components'
import { ICustomer } from '../../api/customer-api'
import Card from '../../components/Card'
import Space, { SpaceEnum } from '../../components/Space'
import { dark } from '../../styles/colors'
import PhoneCell from '../Customers/PhoneCell'
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
      <Space height={SpaceEnum.m} />
      <PhoneCell
        style={{ justifyContent: 'center' }}
        phone={_.customer.phone}
        fontSize={'1.3rem'}
      />
    </Card>
  )
}

const Name = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  color: ${dark};
`

export default CustomerCard
