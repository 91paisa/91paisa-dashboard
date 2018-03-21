import * as React from 'react'
import styled from 'styled-components'
import PhoneCell from '../Customers/PhoneCell'

interface IProps {
  data: {
    name: string
    phone: string
  }
}

const UserCell: React.SFC<IProps> = props => (
  <Container>
    <p>{props.data.name}</p>
    <div style={{ padding: '0.3rem' }} />
    <PhoneCell phone={props.data.phone} />
  </Container>
)

const Container = styled.div`
  font-size: 1.1rem;
`

export default UserCell
