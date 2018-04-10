import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ICustomer } from '../../api/customer-api'
import Space, { SpaceEnum } from '../../components/Space'
import { dark, primaryHover } from '../../styles/colors'
import PhoneCell from './PhoneCell'
import StatusCircle from './StatusCircle'
interface IProps {
  customer: ICustomer
  style: any
}
class CustomerListItem extends React.Component<IProps> {
  public shouldComponentUpdate() {
    return false
  }
  public render() {
    const { style, customer } = this.props
    return (
      <Container style={style}>
        <CustomerDetailLink to={`/customers/${customer.phone}`}>
          <StatusContainer>
            <StatusCircle status={customer.status} />
          </StatusContainer>
          <InnerContainer>
            <Name>{customer.name}</Name>
            <Space height={SpaceEnum.s} />
            <PhoneCell phone={customer.phone} />
          </InnerContainer>
        </CustomerDetailLink>
      </Container>
    )
  }
}

const InnerContainer = styled.div`
  margin: auto 0;
`
const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
`

const CustomerDetailLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: grid;
  grid-template-columns: 3.6rem 1fr;
`

const Name = styled.p`
  color: ${dark};
  text-transform: capitalize;
  font-size: 1.1rem;
`

const Container: any = styled.div`
  width: 100%;
  height: 100%;
  text-decoration: none;
  margin: auto 0;
  display: block;
  &:hover {
    background: ${primaryHover};
  }
`

export default CustomerListItem
