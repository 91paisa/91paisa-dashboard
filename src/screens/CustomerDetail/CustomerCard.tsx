import * as React from 'react'
import styled from 'styled-components'
import { ICustomer } from '../../api/customer-api'
import Card from '../../components/Card'
import Space, { SpaceEnum } from '../../components/Space'
import { getColorBasedOnCustomerStatus } from '../../helpers/color-helper'
import { dark } from '../../styles/colors'
import PhoneCell from '../Customers/PhoneCell'
import StatusStrip from './StatusStrip'

interface IProps {
  customer: ICustomer | undefined
}

const CustomerCard: React.SFC<IProps> = ({ customer }: IProps) => {
  if (customer === undefined) {
    return <div />
  }
  return (
    <Container status={customer.status.code}>
      <StatusStrip status={customer.status.code} />
      <Name>{customer.name}</Name>
      <Space height={SpaceEnum.m} />
      <PhoneCell
        style={{ justifyContent: 'center' }}
        phone={customer.phone}
        fontSize={'1.3rem'}
      />
    </Container>
  )
}

const Container: any = Card.extend`
  padding: 0 0 1rem 0;
  border-top: ${(props: any) =>
    getColorBasedOnCustomerStatus(props.status) + ' 1px solid'};
`

const Name = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  color: ${dark};
`

export default CustomerCard
