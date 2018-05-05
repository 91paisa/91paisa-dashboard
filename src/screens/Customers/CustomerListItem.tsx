import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ICustomer } from '../../api/customer-api'
import Space, { SpaceEnum } from '../../components/Space'
import { dark, primaryLight } from '../../styles/colors'
import CustomerStatus from '../CustomerStatus'
import PhoneCell from './PhoneCell'

interface IProps {
  customer: ICustomer
}

class CustomerListItem extends React.Component<IProps> {
  public render() {
    const { customer } = this.props
    return (
      <Link to={`/customers/${customer.phone}`}>
        <Container>
          <Name>{customer.name}</Name>
          <Space height={SpaceEnum.xxxs} />
          <PhoneCell phone={customer.phone} />
          <Space height={SpaceEnum.xxs} />
          <CustomerStatus {...customer.status} />
        </Container>
      </Link>
    )
  }
}

const Container = styled.div`
  margin: auto 0;
  padding: 0 16px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  &:hover {
    background: ${primaryLight};
  }
`

const Name = styled.p`
  color: ${dark};
  text-transform: capitalize;
  font-size: 1.1rem;
  font-weight: 500;
`

export default CustomerListItem
